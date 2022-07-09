const select = document.querySelector('select');
const allLang = ['en', 'cn'];
let storage = localStorage.getItem("lang");

const langCommon = {
    "backers":{
        "en":"our backers",
        "cn":"我们的支持者"
    },
    "launch":{
        "en":"launch app",
        "cn":"加入我们社区"
    },
    "launchDisc":{
        "en":"launch app",
        "cn":"加入我们社区"
    },
    "disclaimer":{
        "en":"Current version of the Product is made available on an “AS IS” basis only for testing purposes and thus may not work as the user expects. Only the desktop version is supported, mobile and tablet versions will be released later.  Some bugs and stability issues may happen from time to time.",
        "cn":"当前版本的产品是基于在“原样”的基础上制作，仅用于测试，因此可能无法按用户预期工作。可能有时会发生一些错误和稳定性问题。"
    },
    "plc": {
        "en":"Enter your email address here",
        "cn":"在此输入您的电子邮件地址"
    },
    "sub": {
        "en":"Sign up",
        "cn":"注册"
    },
    "stay": {
        "en":"Stay tuned",
        "cn":"保持关注"
    },
    "text": {
        "en":"Subscribe to our newsletter and never miss our updates and announcements.",
        "cn":"订阅我们的通讯，不要错过我们的更新和公告。"
    },
    "mHome": {
        "en":"Home",
        "cn":"主页"
    },
    "mAmb": {
        "en":"Ambassadors",
        "cn":"成为大使"
    },
    "mAbout": {
        "en":"About",
        "cn":"关于我们"
    },
    "mUser": {
        "en":"Early User",
        "cn":"成为早期用户"
    },
    "mTeam": {
        "en":"The team",
        "cn":"团队"
    },
    "mRef": {
        "en":"Referral",
        "cn":"推荐"
    },
    "mBlog": {
        "en":"Blog",
        "cn":"博客"
    },
    "mBtn": {
        "en":"launch app",
        "cn":"加入我们社区"
    },
    "mHomeF": {
        "en":"Home",
        "cn":"主页"
    },
    "mAmbF": {
        "en":"Ambassadors",
        "cn":"成为大使"
    },
    "mAboutF": {
        "en":"About",
        "cn":"关于我们"
    },
    "mUserF": {
        "en":"Early User",
        "cn":"成为早期用户"
    },
    "mTeamF": {
        "en":"The team",
        "cn":"团队"
    },
    "mRefF": {
        "en":"Referral",
        "cn":"推荐"
    },
    "mBlogF": {
        "en":"Blog",
        "cn":"博客"
    },
    "chatF":{
        "en":"Chat",
        "cn":"交流"
    },
    "newsF":{
        "en":"News",
        "cn":"新闻"
    },
    "twitterF": {
        "en":"Twitter",
        "cn":"推持"
    }
};
const langArr = {
    "title": {
        "en":"Become a Primex Early User",
        "cn":"成为Primex早期用户"
    },
    "subT": {
        "en":"Hello everyone! We are excited to announce the Primex Early User program.",
        "cn":"大家好！我们很高兴来宣布Primex早期用户计划。"
    },
    "abtT": {
        "en":"Submit an application",
        "cn":"提交申请"
    },
    "abtText": {
        "en":"We’re building a truly decentralized protocol which needs to be supported by the community. That’s why we’re inviting early Traders, Liquidity providers, and Keepers to collaborate with the core team and participate in the protocol’s testing and development.",
        "cn":"我们正在着力设立一个真正的去中心化协议，这需要得到社区的支持。<br/>这就是为什么我们要邀请早期的交易者、流动资金提供者和 <br/>清算者与核心团队合作，参与协议的测试和开发。"
    },
    "provUser": {
        "en":"Primex Early user",
        "cn":"Primex早期用户"
    },
    "provT": {
        "en":"Liquidity Providers (lenders)",
        "cn":"流动资金提供者（贷款人）"
    },
    "provText": {
        "en":"Liquidity providers (LPs) will have an increased incentive for getting involved early in the protocol's lifecycle. One of our crucial goals is to see Primex successfully launched - so we need to have liquidity in the first credit buckets.",
        "cn":"流动资金提供者（LPs）将在协议的生命周期早期参与阶段中会发挥更大的动力。我们的重要目标之一是看到Primex成功推出该协议。所以我们需要在第一批风险桶中拥有流动资金。"
    },
    "tradeT": {
        "en":"Early Traders",
        "cn":"早期交易者"
    },
    "tradeText": {
        "en":"Early Traders use the liquidity from credit buckets, or pools, to margin trade across multiple DEXs. Traders will have early access to Primex Finance, including alpha and beta versions of the protocol. Thus, they will have the opportunity to test early versions of the protocol, share ideas, and vote for new features.",
        "cn":"早期交易者使用来自信用桶或资金池的流动资金，在多个DEX进行保证金交易。交易者将有机会提前接触Primex Finance，包括协议的alpha和beta版本。因此，他们将有机会测试协议的早期版本，分享想法，并为新功能投票。"
    },
    "keepT": {
        "en":"Early Keepers",
        "cn":"早期清算者"
    },
    "keepText": {
        "en":"The system’s stability and the security of lenders' funds depends on the timely closing of positions; we need decentralized Keepers to close trading positions. Since the closing can't happen on its own, an external stakeholder hosting a keeper is needed.",
        "cn":"系统的稳定性和贷款人的资金安全取决于及时平仓。我们需要去中心化的清算员来关闭交易头寸。由于平仓不可能自己发生，所以需要一个外部利益相关者主持守约人。"
    },
    "ben": {
        "en":"Benefits",
        "cn":"成为早期用户的益处"
    },
    "li1": {
        "en":"Communication with other participants in private Discord channels",
        "cn":"在私人 Discord 频道中与其他参与者交流"
    },
    "li2": {
        "en":"Communication with the core team",
        "cn":"可与核心团队的交流"
    },
    "li3": {
        "en":"Early access to the app",
        "cn":"可优先使用应用程序"
    },
    "li4": {
        "en":"Ability to take part in private challenges",
        "cn":"可获得参加私人挑战的能力"
    },
    "li5": {
        "en":"Earn exclusive prizes for early users",
        "cn":"可提前赚取专属奖品"
    },
    "progT":{
        "en":"Become a Primex<br/> Early User",
        "cn":"成为Primex早期用户"
    },
    "progSub":{
        "en":"Let’s participate in the protocol<br/> testing and development.",
        "cn":"让我们一起参与协议的测试和开发。"
    },
    "progBtn":{
        "en":"Submit an application",
        "cn":"提交申请"
    }
}

select.addEventListener('change', changeLanguage);

function changeLanguage(){
    localStorage.setItem("lang", select.value);
    location.reload();
}

function changeCommLang(h){
    for (let key in langCommon){
        if(!document.querySelector('.lngComm-'+key))continue;
        document.querySelector('.lngComm-'+key).innerHTML = langCommon[key][h];
    }
    if (document.querySelector('.lngComm-plcF')){
        document.querySelector('.lngComm-plcF').placeholder = langCommon["plc"][h];
        document.querySelector('.lngComm-subF').value = langCommon["sub"][h];
    }
}

function changePageLanguage(){
    if (!storage){
        localStorage.setItem("lang", "en")
        location.reload()
    }
    select.value = storage;
    changeCommLang(storage);
    for (let key in langArr){
        if (!document.querySelector('.lngUser-'+key)){
            continue
        }
        document.querySelector('.lngUser-'+key).innerHTML = langArr[key][storage];
    }
}

changePageLanguage()