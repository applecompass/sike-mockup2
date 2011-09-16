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
    // 用户登录
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
    // 用户注册
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
    // 用户信息（简）
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
    // 获取所有计划
    // 从服务端获取，无参数
    AllPlans:
        [{
            PlanId: "",
            PlanName: "",
            PlanImgUrl: "",
            Slogan: "", // 计划标语/口号
            Member: "" // 计划参与人数
        }],
    // POST
    // 创建新计划
    // 客户端发给服务端
    // 返回true/false(错误类型)
    CreatePlan:
        {
            UserId: "",
            PlanId: "",
            PlanHour: "", // 计划小时数
            Ambition: "" // 我的目标/承诺
        },
    /* ---------------------------------------------------- */
    // GET: UserId
    // 获取我的所有计划
    // 从服务端获取，参数：UserId
    MyPlan:
        [{
            PlanId: "",
            PlanName: "",
            PlanImgUrl: "",
            PlanHour: "",
            FinishTime: "", // 该计划已经完成的时间
            CreateDate: ""
        }],
    // POST
    // 烧计划
    // 客户端发给服务端
    // 返回true/false(错误类型)
    UpdatePlan:
        {
            UserId: "",
            PlanId: "",
            BurnTime: "", // 烧的时间
            Message: ""
        },
    // GET: UserId
    // 获取最近更新
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
                PublishDate: "", // 发布的时间
                PublishDevice: "" // 发布使用的设备
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
    // 获取最热/火的计划
    // 客户端发给服务端
    // 返回true/false(错误类型)
    HotPlans:
        [{
            PlanId: "",
            PlanName: "",
            PlanImgUrl: "",
            Member: "" // 该计划参与的人数
        }],
    /* ---------------------------------------------------- */
    // GET: UserId
    // 获取某用户的所有计划（包括计划历史记录）
    // 从服务端获取，参数：UserId
    UserPlan:
        [{
            PlanId: "",
            PlanName: "",
            PlanImgUrl: "",
            PlanHour: "",
            FinishTime: "",
            CreateDate: "",
            History: // 该计划的历史记录
                [{
                    BurnTime: "",
                    Message: "",
                    PublishDate: ""
                }]
        }],
    // GET: PlanId,PlanHour,FinishTime,PassTime
    // 根据计划完成情况，获取计划的完成排名
    // 从服务端获取，参数：PlanId,PlanHour,FinishTime,PassTime
    PlanRank: {
        rank: ""
    },
    // GET: PlanId
    // 获取计划的相关资源/资料
    // 从服务端获取，参数：PlanId
    PlanConsult: [{
        consult: ""
    }],
    // GET: UserId
    // 获取用户粉丝
    // 从服务端获取，参数：UserId
    Fans:
        [{
            UserId: "",
            UserName: "",
            HeadshotImgUrl: "",
            Gender: ""
        }]
};