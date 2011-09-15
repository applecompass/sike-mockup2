var Structure = {
    // RENDER
    Context:
        {
            UserId: "",
            Token: ""
        },
    /* ---------------------------------------------------- */
    // GET
    Login:
        {
            UserName: "",
            PassWord: "",
            Token: ""
        },
    /* ---------------------------------------------------- */
    // GET
    Register:
        {
            Email: "",
            UserName: "",
            PassWord: "",
            Token: ""
        },
    /* ---------------------------------------------------- */
    // GET: UserId
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
    AllPlans:
        [{
            PlanId: "",
            PlanName: "",
            PlanImgUrl: "",
            Slogan: "",
            Member: ""
        }],
    // POST
    CreatePlan:
        {
            UserId: "",
            PlanId: "",
            PlanHour: "",
            Ambition: ""
        },
    /* ---------------------------------------------------- */
    // GET: UserId
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
    UpdatePlan:
        {
            UserId: "",
            PlanId: "",
            BurnTime: "",
            Message: ""
        },
    // GET: UserId
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
    Signature:
        {
            UserId: "",
            signature: ""
        },
    // GET
    HotPlans:
        [{
            PlanId: "",
            PlanName: "",
            PlanImgUrl: "",
            Member: ""
        }],
    /* ---------------------------------------------------- */
    // GET: UserId
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
    PlanRank: {
        rank: ""
    },
    // GET: PlanId
    PlanConsult: [{
        consult: ""
    }],
    // GET: UserId
    Fans:
        [{
            UserId: "",
            UserName: "",
            HeadshotImgUrl: "",
            Gender: ""
        }]
};
