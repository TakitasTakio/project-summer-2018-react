import React from 'react'

const MODULE_API_URL = 'https://course-web-app-server-iii.herokuapp.com/api/course/CID/module'
let _singleton = Symbol();
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }

    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {   body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    findAllModulesForCourse(courseId) {
        return fetch(
            MODULE_API_URL
                .replace('CID', courseId))
            .then(function (response) {
                return response;
            })
    }

    deleteModule(moduleId) {
        const MODULE_API_URL2 = 'http://localhost:8080/api/module/MODULE_ID'
        return fetch(MODULE_API_URL2.replace
        ('MODULE_ID', moduleId), {
            method: 'delete'
        })
    }






}


