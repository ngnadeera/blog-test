export const getComments = async () => {
    return  [
    {
        id:"1",
        body:"First Comment!",
        username:"Jack",
        userId:"1",
        parentId: null,
        createdAt: "2023-10-03T23:00:00.010+02:00",
    },
    {
        id:"2",
        body:"Second Comment!",
        username:"John",
        userId:"2",
        parentId: null,
        createdAt: "2023-08-16T23:00:00.010+02:00",
    },
    {
        id:"3",
        body:"First Comment first reply!",
        username:"John",
        userId:"2",
        parentId: "1",
        createdAt: "2023-10-05T21:50:00.010+02:00",
    },
    {
        id:"4",
        body:"Second Comment second reply!",
        username:"John",
        userId:"2",
        parentId: "2",
        createdAt: "2023-08-16T23:00:00.010+02:00",
    },

]
};

export const createComment = async (text, parentId= null) => {
    return {
        id: Math.random().toString(36).substring(2,9),
        body: text,
        parentId,
        userId: "1",
        username: "John",
        createdAt: new Date().toISOString(),
    };
};

export const deleteComment = async (commentId) => {
    return {};
}

export const updateComment = async (text) => {
    return { text };
}; 