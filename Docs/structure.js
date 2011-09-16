var Structure = {
    // RENDER
    // 直接render到页面
    Context:
        {
            UserId: "",
            Token: ""
        },
    /* ---------------------------------------------------- */
    // GET
    // 客户端发给服务端
     // 返回true/false(错误类型)
    Login:
        {
            UserName: "",
            PassWord: "",
            Token: ""
        },
    /* ---------------------------------------------------- */
    // GET
    // 客户端发给服务端
     // 返回true/false(错误类型)
    Register:
        {
            Email: "",
            UserName: "",
            PassWord: "",
            Token: ""
        },
    /* ---------------------------------------------------- */
    // GET: UserId
    // 从服务端获取，参数：UserId
    ExpressProfile:
        {
            UserId: "",
            UserName: "",
            HeadshotImgUrl: "",
            Gender: "",
            Location: "",
            Signature: ""
        },
    // GET
    // 从服务端获取，无参数
    AllPlans:
        [{
            PlanId: "",
            PlanName: "",
            PlanImgUrl: "",
            Slogan: "",
            Member: ""
        }],
    // POST
    // 客户端发给服务端
     // 返回true/false(错误类型)
    CreatePlan:
        {
            UserId: "",
            PlanId: "",
            PlanHour: "",
            Ambition: ""
        },
    /* ---------------------------------------------------- */
    // GET: UserId
    // 从服务端获取，参数：UserId
    MyPlan:
        [{
            PlanId: "",
            PlanName: "",
            PlanImgUrl: "",
            PlanHour: "",
            FinishTime: "",
            CreateDate: ""
        }],
    // POST
    // 烧计划小时
     // 客户端发给服务端
     // 返回true/false(错误类型)
    UpdatePlan:
        {
            UserId: "",
            PlanId: "",
            BurnTime: "",
            Message: ""
        },
    // GET: UserId
    // 从服务端获取，参数：UserId
    Feeds:
        [{
            User: {
                UserId: "",
                UserName: "",
                HeadshotImgUrl: "",
                Gender: ""
            },
            Plan: {
                PlanId: "",
                PlanName: "",
                PlanHour: "",
                FinishTime: "",
                BurnTime: "",
                Message: "",
                PublishDate: "",
                PublishDevice: ""
            },
            Like: 0
        }],
    // GET: UserId
    // 从服务端获取，参数：UserId，返回该结构
    // 更新签名，客户端发给服务端
     // 返回true/false(错误类型)
    Signature:
        {
            UserId: "",
            signature: ""
        },
    // GET
    // 最热/火的计划
    // 客户端发给服务端
     // 返回true/false(错误类型)
    HotPlans:
        [{
            PlanId: "",
            PlanName: "",
            PlanImgUrl: "",
            Member: ""
        }],
    /* ---------------------------------------------------- */
    // GET: UserId
    // 从服务端获取，参数：UserId
    UserPlan:
        [{
            PlanId: "",
            PlanName: "",
            PlanImgUrl: "",
            PlanHour: "",
            FinishTime: "",
            CreateDate: "",
            History:
                [{
                    BurnTime: "",
                    Message: "",
                    PublishDate: ""
                }]
        }],
    // GET: PlanId,PlanHour,FinishTime,PassTime
    // 从服务端获取，参数：PlanId,PlanHour,FinishTime,PassTime
    PlanRank: {
        rank: ""
    },
    // GET: PlanId
    // 从服务端获取，参数：PlanId
    PlanConsult: [{
        consult: ""
    }],
    // GET: UserId
    // 从服务端获取，参数：UserId
    Fans:
        [{
            UserId: "",
            UserName: "",
            HeadshotImgUrl: "",
            Gender: ""
        }]
};
