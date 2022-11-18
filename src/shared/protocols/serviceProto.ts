import { ServiceProto } from 'tsrpc-proto';
import { ReqAddData, ResAddData } from './PtlAddData';
import { ReqAddTeachableAccount, ResAddTeachableAccount } from './PtlAddTeachableAccount';
import { ReqAddUser, ResAddUser } from './PtlAddUser';
import { ReqCheckEmail, ResCheckEmail } from './PtlCheckEmail';
import { ReqGetData, ResGetData } from './PtlGetData';
import { ReqSendEmail, ResSendEmail } from './PtlSendEmail';

export interface ServiceType {
    api: {
        "AddData": {
            req: ReqAddData,
            res: ResAddData
        },
        "AddTeachableAccount": {
            req: ReqAddTeachableAccount,
            res: ResAddTeachableAccount
        },
        "AddUser": {
            req: ReqAddUser,
            res: ResAddUser
        },
        "CheckEmail": {
            req: ReqCheckEmail,
            res: ResCheckEmail
        },
        "GetData": {
            req: ReqGetData,
            res: ResGetData
        },
        "SendEmail": {
            req: ReqSendEmail,
            res: ResSendEmail
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 4,
    "services": [
        {
            "id": 0,
            "name": "AddData",
            "type": "api"
        },
        {
            "id": 2,
            "name": "AddTeachableAccount",
            "type": "api"
        },
        {
            "id": 3,
            "name": "AddUser",
            "type": "api"
        },
        {
            "id": 4,
            "name": "CheckEmail",
            "type": "api"
        },
        {
            "id": 1,
            "name": "GetData",
            "type": "api"
        },
        {
            "id": 5,
            "name": "SendEmail",
            "type": "api"
        }
    ],
    "types": {
        "PtlAddData/ReqAddData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddData/ResAddData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlAddTeachableAccount/ReqAddTeachableAccount": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddTeachableAccount/ResAddTeachableAccount": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlAddUser/ReqAddUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddUser/ResAddUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlCheckEmail/ReqCheckEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "email",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "code",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlCheckEmail/ResCheckEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "state",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "PtlGetData/ReqGetData": {
            "type": "Interface"
        },
        "PtlGetData/ResGetData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "content",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "time",
                                    "type": {
                                        "type": "Date"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "PtlSendEmail/ReqSendEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "email",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlSendEmail/ResSendEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        }
    }
};