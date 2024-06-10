

export const sampleChats = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John",
        _id: "1",
        groupChat: false,
        members: ["1", "2"],

    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Nick",
        _id: "2",
        groupChat: true,
        members: ["1", "2"],

    }
];

export const samplerUsers=[
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John",
        _id: "1",

    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Nick",
        _id: "2",

    },
];

export const samplerNotifications=[
    {
        sender:{
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John",
        },
        _id: "1",

    },
    {
        sender:{
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "Nick",
        },  
        _id: "2",

    },
];

export const sampleMessage = [
    {
        attachments: [ ],
        content: "kaam ka message hai ",
        _id: "hkgckdsgcfmd",
        sender:{
            _id:"user._id",
            name:"Angela",
        },
        chat:"chatId",
        createdAt: "2024-02-12T10:41:30.630Z",
    },
    
    {
        attachments: [
            {
                public_id: "bsjhv 2",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "",
        _id: "hkgckdsgcwngfmd",
        sender:{
            _id:"sdfssdfssdf",
            name:"Angela Yu",
        },
        chat:"chatId",
        createdAt: "2024-02-12T10:41:30.630Z",
    }
];

export const dashboardData = {
    users:[
        {
            name: "John",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "1",
            username:"john",
            friends:20,
            groups:5,
        },
        {
            name: "Nick",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "2",
            username:"nick",
            friends:20,
            groups:25,
        }
    ],

    chats:[
        {
            name: "Forever",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "1",
            groupChat: false,
            members:[
                {_id:"1", avatar:"https://www.w3schools.com/howto/img_avatar.png"},
                {_id:"2", avatar:"https://www.w3schools.com/howto/img_avatar.png"},
            ],
            totalMembers:2,
            totalMessages:20,
            creator:{
                name:"John Doe",
                avatar:"https://www.w3schools.com/howto/img_avatar.png"
            },
        },
        {
            name: "College",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "2",
            groupChat: false,
            members:[
                {_id:"1", avatar:"https://www.w3schools.com/howto/img_avatar.png"},
                {_id:"2", avatar:"https://www.w3schools.com/howto/img_avatar.png"},
            ],
            totalMembers:2,
            totalMessages:20,
            creator:{
                name:"John Doe",
                avatar:"https://www.w3schools.com/howto/img_avatar.png"
            },
        },
    ],

    messages:[
        {
            attachments:[],
            content:"Messgase aaya hai",
            _id:"jabgfkjdfkgndjkg",
            sender:{
                avatar:"https://www.w3schools.com/howto/img_avatar.png",
                name:"Chaman",
            },
            chat:"chatId",
            groupChat:false,
            createdAt:"2024-02-12T10:41:30.630Z",
        },
        {
            attachments:[
                {
                    public_id: "ajgd 2",
                    url:"https://www.w3schools.com/howto/img_avatar.png",
                }
            ],
            content:"Messgase aaya hai",
            _id:"jabgfkjdfkgnjdhdjkg",
            sender:{
                avatar:"https://www.w3schools.com/howto/img_avatar.png",
                name:"Chaman 2",
            },
            chat:"chatId",
            groupChat:true,
            createdAt:"2024-02-12T10:41:30.630Z",
        },
    ]
}