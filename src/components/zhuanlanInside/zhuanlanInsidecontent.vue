<template>
    <div>
        <div class="zhuanlanInsidecontent">
            <p class="pone">{{zhuanlanInsidecontentList.list1}}</p>
            <p class="ptwo">{{zhuanlanInsidecontentList.list2}}</p>
            <p class="pthree">{{zhuanlanInsidecontentList.list3}}</p>
            <p class="pfour">{{zhuanlanInsidecontentList.list4}}</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "zhuanlanInsidecontent",
        props: ["zhuanlanInsidecontentList"],
        // data() {
        //     return {
        //         zhuanlanInsidecontentList: {
        //             list1: "想成为一点就透、甚至无师自通的代码高手而不是代码难以理解和 bug 遍野的代码小白，提高编写代码的效率和质量？最重要的是，在编程的时候，要有清晰的思路。该如何拥有清晰的编程思路。？这时就需要请出“编程思维与编程方法论——分类拆解法”。“分类拆解法”的核心思想就是将一个页面进行分类、拆解，厘清有多少个分类，以及分类之间的相互关系，然后编写代码逐一实现它们，最后把所有分类组合起来就实现了这个页面完整的功能。该方法作为本专栏的核心内容与精髓，可以帮助你快速具备小程序编程思维，快速提高自己的小程序编程能力，并拓展到其它的工作场景中，事半功倍。",
        //             list2: "本专栏的另一个核心价值内容是实战商业项目“会员制社交电商小程序”。这是一个类似“小红书”的商业小程序应用脱敏后的版本，包含会员成长与等级体系、积分体系、付费会员体系，以及商城、社区等每个商业小程序应用的标配功能。讲解内容包含完整设计思路、功能实现、详细开发过程与可商用完整源代码。",
        //             list3: "相信你在认真学习之后，既可以自己从头开发商业小程序应用，也可以直接基于源代码（MIT开源协议、可商用）快速扩展出自己的商业小程序应用；更包含几十万字微信官方“小程序开发文档”的完整学习脉络梳理，由浅入深的完整学习顺序，各个小程序开发知识点在微信官方文档中的位置，常用知识重点的详细讲解与实操案例，让你具备继续深入小程序高阶开发的自学能力。为了尽可能让每一位读者都能上手实践，专栏内容完全基于微信小程序目前已开放的免费资源，包括微信小程序官方开发文档、微信开发者工具和微信云开发等。只需要一个 IDE 即可完整实践专栏所有项目，无需购买域名和服务器及域名网站备案，没有任何额外的学习成本。",
        //             list4: "对于有求职需求的同学，专栏还会讲解小程序发布流程与 GitHub 创建项目流程，帮助你建立和发布自己的小程序作品和 GitHub 作品，增强你的面试竞争力。专栏作者刘捷（笔名：静缺），第一批微信开发从业者，于 2015 年出版《微信公众平台企业应用开发实战》一书，曾帮助数十家财富 500 强企业完成整体业务向微信端的迁移，负责项目曾获多家企业的全球年度最具创新性 IT 项目大奖（The Most Innovative IT Project Of The Year），现为一家上市企业的合伙人，并担任 CTO。相信刘捷老师特别设计、集 15 年软件开发经验精髓于一身的“分类拆解法”，无论是对个人编程思维的良好养成，编程思路的快速理清，或是帮助公司大幅度降低实习生淘汰率、缩短开发工期，都很有益。",
        //         }
        //     }
        // }
    }
</script>

<style scoped>
    /*.zhuanlanInsidecontent {*/
    /*    width: 90%;*/
    /*    margin: 0 auto;*/
    /*    font-size: 0.3rem;*/
    /*    text-align: left;*/
    /*}*/
    /*.pone,.ptwo,.pthree,.pfour {*/
    /*    margin-bottom: 0.3rem;*/
    /*}*/
</style>