(this.webpackJsonpbuild_dir=this.webpackJsonpbuild_dir||[]).push([[0],{58:function(e,t,a){e.exports=a(75)},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(23),i=a(89),o=a(90),c=a(88),s=a(86),m=a(18),u=a(9),d=a(0),p=a(13),g=a(49),v=function(){var e=r.a.createElement(g.a,null);return{important:!0,target:"_blank",icon:e,name:r.a.createElement("span",null,e," Email ( gd.mail.89@gmail.com )"),link:"mailto:gd.mail.89@gmail.com"}}(),f=function(){var e=r.a.createElement(p.i,null);return{important:!0,target:"_blank",icon:e,name:r.a.createElement("span",null,e," Skype ( dier_89 )"),link:"skype:dier_89"}}(),E=function(){var e=r.a.createElement(p.f,null);return{important:!0,target:"_blank",icon:e,name:r.a.createElement("span",null,e," LinkedIn ( dmitriy-gorkhover )"),link:"https://www.linkedin.com/in/dmitriy-gorkhover/"}}(),h=function(){var e=r.a.createElement(p.c,null);return{important:!1,target:"_blank",icon:e,name:r.a.createElement("span",null,e," Github"),link:"https://github.com/DimkaGorhover"}}(),b=function(){var e=r.a.createElement(p.j,null);return{important:!1,target:"_blank",icon:e,name:r.a.createElement("span",null,e," Telegram"),link:"https://t.me/hdmytro"}}(),k=function(){var e=r.a.createElement(p.k,null);return{important:!1,target:"_blank",icon:e,name:r.a.createElement("span",null,e," Twitter"),link:"https://twitter.com/dghover"}}(),y=function(){var e=r.a.createElement(p.b,null);return{important:!1,target:"_blank",icon:e,name:r.a.createElement("span",null,e," Facebook"),link:"https://www.facebook.com/dmitriy.gorhover"}}(),w=[v,f,E,h,b,k,y,{important:!1,target:"_blank",name:r.a.createElement("span",null,"LeetCode"),link:"https://leetcode.com/dimkagorhover/"},{important:!1,target:"_blank",name:r.a.createElement("span",null,"HackerRank"),link:"https://www.hackerrank.com/gd_mail_89"}],_=function(e){var t=e.link,a=e.icon,n=e.target,l=void 0===n?"_blank":n;return r.a.createElement(o.a.Link,{href:t,target:l},a)},S=function(e){var t=e.iconsSize,a=void 0===t?"1.6em":t,n=[b,h,v,f].map((function(e,t){return r.a.createElement(_,Object.assign({key:t},e))}));return r.a.createElement(d.b.Provider,{value:{size:a}},n)},D=a(80),J=a(91),x=function(){return r.a.useEffect((function(){document.title="Blog Page"})),r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,null,r.a.createElement("h1",null,"Blog")),r.a.createElement(J.a,{variant:"warning"},"The blog is currently unavailable"))},C={home:{name:function(){return"Home"},url:function(){return"/"}},blog:{name:function(){return"Blog"},url:function(){return"/blog"}},cv_tech:{name:function(){return"Technical CV"},url:function(){return"/cv/tech"}},cv_main:{name:function(){return"Main CV"},url:function(){return"/cv/main"}}},M=a(81),A=a(82),j=function(e){var t=e.children;return r.a.createElement(M.a,null,r.a.createElement(A.a,{xs:12},t))},P=function(){r.a.useEffect((function(){document.title="Home Page"}));var e=[C.cv_main,C.cv_tech].map((function(e){var t=e.name,a=e.url;return r.a.createElement(j,null,r.a.createElement(m.b,{to:a()},t()))}));return r.a.createElement(D.a,null,r.a.createElement(j,null,r.a.createElement("h1",null,"Home Page")),e)},G=function(){return{id:"software_engineer_at_loopme_001",position:"Clojure Developer",company:{name:"LoopMe Ad Serving Team",link:"https://loopme.com"},city:"Dnipro, Ukraine",dates:{start:new Date(2014,6,1),end:new Date(2015,1,1)},description:[],responsibility:["\n            Migration from Ruby to Clojure, new features, develop fast solution for ad targeting\n            (choosing best ad from big list of ads)\n            "],techStack:{language:"Clojure (based on Java 8)",frameworks:"many Clojure specific libraries",prod_env:"Bare-Metal Servers provisioned by Chef",build_tool:"Leiningen",ci_cd:"Travis CI",storage:["PostgreSQL","Redis","Elasticsearch"],vcs:"Git (Github)",metrics:["NewRelic","Elasticsearch"]}}},I=function(){return{id:"software_engineer_at_loopme_002",position:"Clojure/Java Developer",company:{name:"LoopMe Ad Serving Team",link:"https://loopme.com"},city:"Dnipro, Ukraine",dates:{start:G().dates.end,end:new Date(2016,2,1)},achievements:['\n            I had to implement a very difficult task between 2 languages. \n            It had to be easy if another team helped. But the idea was on PoC stage. \n            I had to do it by myself. I did it successfully and I got "Company Hero" award and \xa3100. \n            This award is given once every six months.\n            '],description:null,currentState:"Migrated from Clojure to Java fully",responsibility:["\n            Develop high-load ad-server, ad targeting, api\u2019s for real time bidding platforms,\n            migration from Clojure to Java.\n            "],techStack:{language:"Java 8, Clojure (based on Java 8)",frameworks:"Spring Boot, Spring 4",prod_env:"Chef + (Apache Mesos + Marathon)",build_tool:"Leiningen (for Clojure Projects), Apache Maven 3+ (for Java Projects)",ci_cd:["Travis CI (for Ruby and Clojure)","Jenkins (for Java)"],storage:"PostgreSQL, Redis, Elasticsearch",vcs:"Git (Github)",metrics:"Datadog \u2192 Grafana + InfluxDB"}}},L=function(){return{id:"software_engineer_at_loopme_003",position:"Java Developer",company:{name:"LoopMe Ad Serving Team",link:"https://loopme.com"},city:"Dnipro, Ukraine",dates:{start:I().dates.end,end:new Date(2016,8,1)},description:null,responsibility:"\n            Develop high-load ad-server, ad targeting, api\u2019s for real time bidding platforms,\n            api\u2019s for front-end team.\n            ",techStack:{language:"Java 8",frameworks:"Spring Boot, Spring 4, RxJava, gRPC (netty + protobuf)",prod_env:"Docker, Kubernetes",build_tool:"Gradle 4.8",ci_cd:"Jenkins",storage:"Kafka, Cassandra, PostgreSQL, Elasticsearch",vcs:"Git (Github)",metrics:"Grafana \u2192 Datadog"}}},R=function(){return{id:"software_engineer_at_loopme_004",position:"Java Developer",company:{name:"LoopMe Data Science Team",link:"https://loopme.com"},city:"Dnipro, Ukraine",dates:{start:L().dates.end,end:new Date(2018,10,1)},achievements:["\n            I\u2019ve been working for Data Science team for about 2 years.\n            As a result, I created high-performance java applications by using\n            a small number of design patterns and different data structures\n            with response ~1ms (99 percentile).\n            ","\n            I didn't use a lot of frameworks\n            and libraries, and it helped with future migrations on new java versions.\n            "],responsibility:"\n            Develop high-performance high-load applications\n            for Data Science team, implement data science algorithms and adopt it for runtime,\n            deliver prediction and bidding models to production,\n            implement custom transport solutions for big prediction models,\n            benchmarking, data structures investigation.\n            ",techStack:{language:"Java 8, 9, 10, 11 (currently preparing migration to 12ea)",frameworks:"Mostly Just Java, Spring Boot 2, Spring 5, RxJava 2, gRPC (netty + protobuf)",prod_env:"Docker, Kubernetes",build_tool:"Gradle 4.8.1, 4.10.2",ci_cd:"Jenkins (pipelines + Docker Multi-Stage builds)",storage:"Kafka, Cassandra, PostgreSQL, Elasticsearch 6",vcs:"Git (Github)",metrics:"Datadog \u2192 Prometheus + Grafana"}}},B=function(){var e=[G(),I(),L(),R()],t=function(e){var t=e.name,a=e.id;return{name:"CV: ".concat(t),url:"#".concat(a),target:"_self"}};return{id:"software_engineer_at_loopme",position:"Software Engineer",company:{name:"LoopMe",link:"https://loopme.com"},city:"Dnipro, Ukraine",links:[{name:"LoopMe.com",url:"https://loopme.com"},t(G()),t(I()),t(L()),t(R())],dates:{start:new Date(2014,6,1),end:new Date(2018,9,30)},description:["I'd been developing a Digital Advertising platform, implementing ad-targeting algorithms \n            on Clojure, and then rewritten on Java. Also, I'd been developing a Java Application \n            that uses prediction algorithms to choose the best ad and place the best bid."],techStack:{language:["Clojure \u2192 Java (8 \u2192 9 \u2192 10 \u2192 11 \u2192 12ea)"],frameworks:["Spring Boot 2","Spring 5","RxJava 2","gRPC (netty + protobuf)"],prod_env:["Docker","Kubernetes"],build_tool:["Gradle 5+"],ci_cd:["Jenkins (pipelines + Docker Multi-Stage builds)"],storage:["Kafka","Cassandra","PostgreSQL","Elasticsearch 6"],vcs:["Git (Github)"],metrics:["Datadog \u2192 Prometheus + Grafana"]},achievements:null,currentState:null,inner:e}},N=a(92),U=a(40),Q=function(e){e.icon;var t=e.children;return r.a.createElement(r.a.Fragment,null," ".concat(t))},T=a(83),O=a(87),F=new Date(2012,2,28),V={first_working_day:F,language:[{name:"English",level:"Intermediate"},{name:"Ukrainian",level:"Native"},{name:"Russian",level:"Fluent"},{name:"Deutsch",level:"Elementary"}],about_me:["Software Engineer ".concat(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,a=Math.floor(Object(T.a)(t,e)/12);return"".concat(a,"+")}(F)," years, \n        mostly Java and JVM based languages, such as Clojure, Groovy.\n        "),"Passionate about Java, JVM, performance, benchmarking, \n        data structures, reactive streams.\n        ","Looking for New Challenges, Product Companies are more preferable, \n        full time, a remote is more preferable for now, but an office \n        is not the issue, relocation to other city/country is not an issue.\n        "]},H=[{name:"Ukrainian State Chemical Technology University",link:"https://udhtu.edu.ua/en/",degree:{name:"Bachelor",subject:"Computer Science",paper:null},location:"Dnipro, Ukraine",dates:{start:new Date(2006,8,1),end:new Date(2010,5,1)}},{name:"Ukrainian State Chemical Technology University",link:"https://udhtu.edu.ua/en/",degree:{name:"Master",subject:"Computer Science",paper:null},location:"Dnipro, Ukraine",dates:{start:new Date(2010,8,1),end:new Date(2011,5,1)}}],K=w,z=function(){var e=new Date,t=I().dates.end,a=B().dates.end;return[{name:"Languages",value:[r.a.createElement(Q,{icon:p.d},"Java (Versions 6+)"),"Clojure (2 years on prod, ".concat(Object(N.a)(e,t)," years ago)"),r.a.createElement(Q,{icon:p.h},"Python"),r.a.createElement(Q,{icon:p.e},"JavaScript"),"Go (beginner)",r.a.createElement(Q,{icon:p.g},"Shell {sh, bash, zsh} (low-mid)")]},{name:"Frameworks",value:["Spring (Boot, Web, etc.)","Reactive Streams (RxJava, Project Reactor)","Quarkus","gRPC","React.js"]},{name:"OS",value:["Linux (Ubuntu, Mint, Alpine, CentOS)","Mac OS",r.a.createElement(Q,{icon:U.c},"Windows")]},{name:"Data Bases",value:[r.a.createElement(Q,{icon:U.b},"Redis"),r.a.createElement(Q,{icon:U.a},"PostgreSQL"),"Zookeeper","Kafka"]},{name:"Tools",value:[r.a.createElement(Q,{icon:p.a},"Docker"),r.a.createElement(Q,{icon:p.a},"Docker-Compose"),"Ansible"]},{name:"Clusters",value:["Kubernetes",r.a.createElement(Q,{icon:p.a},"Docker Swarm")]},{name:"Clouds",value:["Google Cloud Platform (user, ".concat(Object(N.a)(e,a)," years ago)"),"AWS (beginner)"]}]}(),W=[{id:"self_employed",position:"Full-Stack Engineer",company:{name:"Self-Employed"},city:"Lviv, Ukraine",description:["Building k8s Cluster on Bare-Metal using Ansible from scratch, \n            Developing Backend Application for Telegram Bot by using \n            Quarkus Framework + Graal Native Image + Docker"],achievements:["Setup k8s Cluster from scratch on VirtualBox (Alpine Linux, \n            CentOS 7, Ubuntu 20.04) by using Ansible Playbooks"],dates:{start:new Date(2020,0,1)},responsibility:[],techStack:{language:["Java 14","GraalVM 20.1 (Java 11)","Python 3.8","JavaScript"],frameworks:["Spring Boot","RxJava 2","gRPC","React.JS"],prod_env:["VirtualBox (Alpine Linux 3.11 + CentOS 7 + Ubuntu 20.04)","Ansible 2.9+","Docker Swarm \u2192 Kubernetes 1.18.2"],build_tool:["Gradle 6+"],ci_cd:["Jenkins","Gitlab"],storage:["PostgreSQL","Redis"],vcs:["Gitlab"],metrics:["Prometheus + Grafana (in progress...)"]}},{id:"software_engineer_at_n_ix",position:"Software Java Engineer",company:{name:"N-IX",link:"https://n-ix.com"},city:"Lviv, Ukraine",dates:{start:new Date(2019,7,1),end:new Date(2019,11,31)},description:["\n            I'd been working for the company that provides technology \n            and business services for a number of telecommunications \n            companies as well as a variety of other multinational enterprises.\n            "],responsibility:["\n            I was a part of the team that worked on implementing \n            a new gateway protocol - SMGP (Short Message Gateway Protocol).\n            ","\n            It was necessary not only to implement the task but also \n            to cover all possible cases (unit tests), as well as most of the third-party code.\n            ",'\n            After that, I was engaged in fixing security vulnerabilities in the project. \n            To find and check such vulnerabilities i have been using tools \n            like "fortify-on-demand" (on production) and SonarQube (on the local subnet).\n            '],achievements:["To reduce the time of callback about vulnerabilities fixes \n            we needed to set up SonarQube as close as possible to our subnet. \n            ","We decided to set up Docker Swarm Cluster on the local Azure Cloud.\n            ","As the result, I set up Docker Swarm Cluster \n            with Gitlab (mirrored code from Subversion), \n            Jenkins CI (for scheduling SonarQube tasks, \n                and mirroring Subversion repository to Gitlab), \n                and SonarQube (for report about vulnerabilities fixes) by myself.\n                ","Before this, I wasn't familiar close with devops-like tasks. \n            It was interesting experience for me"],techStack:{language:["Java 6"],build_tool:["Apache Maven 3.3.1"],ci_cd:["Jenkins"],frameworks:[],storage:[],metrics:[],vcs:["Subversion (git svn plugin)"]}},{id:"senior_java_developer_at_intellias",position:"Senior Java Developer",company:{name:"Intellias",link:"https://intellias.com"},city:"Lviv, Ukraine",dates:{start:new Date(2018,10,1),end:new Date(2019,2,15)},description:["I'd been working on implementing new algorithms \n            for map matching, providing a comprehensive analysis \n            of different algorithms comparison, developing and extend \n            map matching pipelines with multi-algorithms support"],responsibility:["Implementing new Map Matcher algorithm based \n            on Hidden Markov Model + Algorithm Viterbi"],techStack:{language:["Java 8"],frameworks:[],prod_env:[],build_tool:["Apache Maven"],ci_cd:["Jenkins"],storage:[],metrics:[],vcs:["Git (Gerrit)"]}},B(),{id:"software_engineer_at_ciklum",position:"Java Developer",company:{name:"Ciklum",link:"https://ciklum.com"},excess:!0,links:[{name:"Ciklum.com",url:"https://www.ciklum.com"},{name:"CV: Software Engineer at LoopMe",url:"#software_engineer_at_loopme",target:"_self"}],description:'\n            I\u2019d been working on LoopMe project when it was Ciklum\'s outstaff project.\n            More details in "Software Engineer at LoopMe".\n            ',city:"Dnipro, Ukraine",dates:{start:new Date(2014,6,1),end:new Date(2015,10,1)}},{id:"brtp_middle_software_engineer",position:"Middle Software Engineer",company:{name:"Privat Bank",link:"https://privatbank.ua"},city:"Dnipro, Ukraine",dates:{start:new Date(2013,6,1),end:new Date(2014,6,30)},description:["I\u2019d been developing internal web projects for the business department"],techStack:{language:["Java (Versions: 6, 7, 8)","JavaScript"],frameworks:["Spring 3","jQuery","Angular 1"],build_tool:["Apache Maven"],ci_cd:["Jenkins"],storage:["PostgreSQL","Redis"],vcs:["Gitolite"],metrics:[]},responsibility:[]},function(){var e={id:"privat24_ukraine",name:"Privat24 Ukraine",showDates:!1,dates:{start:new Date(2012,1,28),end:new Date(2013,6,1)},city:"Dnipro, Ukraine",description:[],responsibility:["New small features, support current features, bugfix, unit testing, etc."],techStack:{language:["Java 6","JavaScript"],frameworks:["Java EE (EJB, Resin)","jQuery","Backbone"],build_tool:["Apache Ant"],ci_cd:["Jenkins"],storage:["Sybase","Redis","RabbitMQ"],vcs:["Subversion"]}},t={id:"privat24_georgia",name:"Privat24 Georgia",showDates:!1,dates:{start:new Date(2012,1,28),end:new Date(2013,6,1)},city:"Dnipro, Ukraine",achievements:["\n            I spend 4 weekends (mostly nights) and migrated this project \n            from an old stack of technology (Java 6 + Apache Ant) \n            to a new one (Java 7 + Spring + Apache Maven + Git).\n            ","\n            Unfortunately, there weren't mentors to help me. \n            And based on my lack of knowledge it was very stressful for me, \n            but as a result, I got a great experience that I remember nowadays.\n            "],responsibility:["\n            Develop and support internet banking web application, same as Privat24 Ukraine\n            "],description:"",techStack:{language:["Java 6","JavaScript"],frameworks:["Java EE (EJB, Resin)","jQuery","Spring 3","jQuery"],build_tool:"Netbeans\u2019 Apache Ant scripts \u2192 Apache Maven",ci_cd:["Jenkins"],storage:["Sybase","Redis","RabbitMQ"],vcs:["Subversion","Git (Gitlab)"]}},a={id:"privat24_a_bank",name:"Privat24 A-Bank",showDates:!1,dates:{start:new Date(2012,1,28),end:new Date(2013,6,1)},city:"Dnipro, Ukraine",responsibility:["\n            Develop and support internet banking web application, same as Privat24 Ukraine\n            "],description:"",techStack:{language:["Java 6, JavaScript"],frameworks:["Java EE (EJB), jQuery"],prod_env:["custom"],build_tool:["Netbeans\u2019 Ant scripts"],ci_cd:["Jenkins"],storage:["Sybase, Redis, RabbitMQ"],vcs:["Subversion"],metrics:[]}};return{id:"software_engineer_at_privat_bank",position:"Junior Software Engineer",company:{name:"Privat24 (Privat Bank)",link:"https://privat24.ua"},links:[{name:"PrivatBank.ua",url:"https://privatbank.ua"},{name:"Privat24.ua",url:"https://privat24.ua"}],description:["I was a member of the team that developed and \n            modernized Ukrainian local internet banking system Privat24"],responsibility:['\n            Small features (clinet messages counters, form "don\'t block credit card abroad", etc.),\n            support, bugfixing, unit testing, etc.\n            '],city:"Dnipro, Ukraine",dates:{start:e.dates.start,end:t.dates.end},techStack:{language:["Java (Versions: 6, 7, 8)","JavaScript"],frameworks:["Java EE","EJB","Spring 3","jQuery","Angular 1"],build_tool:["Apache Ant","Apache Maven"],ci_cd:["Jenkins"],storage:["Sybase","Redis","RabbitMQ"],vcs:["Subversion","Gitlab"],metrics:["Zabbix"]},inner:[e,t,a]}}()],Y=function(){var e=V.about_me.map((function(e,t){return r.a.createElement("p",{key:t},e)}));return r.a.createElement("div",null,r.a.createElement("h4",{id:"about_me"},"About Me"),e)},Z=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Dmytro Horkhover"),r.a.createElement("h5",null,"Java Software Engineer"))},X=function(){return r.a.createElement(r.a.Fragment,null)},q=function(e){var t=e.href,a=e.name;return t?r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t,style:{color:"inherit",textDecoration:"none"}},a):r.a.createElement(r.a.Fragment,null,a)},$=function(e){var t=e.importantOnly,a=void 0===t||t,n=K.map((function(e,t){var n=e.name,l=e.link,i=e.important;return a&&!1===i?r.a.createElement(X,{key:t}):r.a.createElement("li",{key:t},r.a.createElement(q,{name:n,href:l}))}));return r.a.createElement("div",null,r.a.createElement("h4",null,"Contacts"),r.a.createElement("ul",{style:{marginLeft:"-1em"}},n))},ee=(a(70),function(e){var t=e.name,a=e.link;return a&&(t=r.a.createElement(q,{name:t,href:a})),r.a.createElement("span",{className:"name"},t)}),te=function(e){var t=e.name,a=e.subject;return r.a.createElement("div",null,r.a.createElement("span",null,"Degree: ",t,", ",a))},ae=function(e){var t=e.education,a=t.degree,n=t.dates,l=t.paper,i=n.start,o=n.end;return r.a.createElement("div",{className:"education"},r.a.createElement("div",null,r.a.createElement(ee,t)),r.a.createElement("div",null,r.a.createElement("span",null,i.getFullYear()," - ",o.getFullYear())),a&&r.a.createElement(te,a),l&&r.a.createElement("div",null,"Paper: ",l))},ne=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Education"),r.a.createElement("ul",null,H.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(ae,{education:e}))}))))},re=a(84),le=(a(71),function(e){var t=e.name,a=e.value;if(!t||!a)return r.a.createElement(r.a.Fragment,null);Array.isArray(a)||(a=[a]);var n=a.reduce((function(e,t){return r.a.createElement(r.a.Fragment,null,e,", ",t)}));return r.a.createElement("tr",null,r.a.createElement("td",{className:"name"},t),r.a.createElement("td",{className:"value"},n))}),ie=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Actual Skills"),r.a.createElement(re.a,{className:"cv_actual_skills"},r.a.createElement("tbody",null,z.map((function(e,t){return r.a.createElement(le,Object.assign({key:t},e))})))))},oe=a(85),ce=function(){return r.a.createElement("div",{style:{alignSelf:"center"}},r.a.createElement(oe.a,{src:"/static/IMG_20190609_191430__01.jpg",style:{width:"100%"},thumbnail:!0}))},se=(a(72),function(e){var t=e.name,a=e.level;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"name"},t)," ",r.a.createElement("span",{className:"level"},"(",a,")"))}),me=function(){var e=V.language.map(se).reduce((function(e,t){return r.a.createElement(r.a.Fragment,null,e,", ",t)}));return r.a.createElement("div",{className:"languages"},r.a.createElement("h4",null,"Languages"),r.a.createElement("p",null,e))},ue=a(27),de=function(e){var t=e.index,a=e.name,n=e.position,l=e.company;return t=t?"".concat(t,". "):"",n&&l?r.a.createElement(r.a.Fragment,null,t,n," @ ",r.a.createElement("span",{className:"company"},r.a.createElement(q,{name:l.name,href:l.link}))):"".concat(t).concat(a)},pe=function(e){var t=e.name,a=e.position,n=e.company;return a&&n?r.a.createElement("h4",{className:"title"},r.a.createElement(de,e)):(console.log("WARNING: field [exp.name] is deprecated"),r.a.createElement("h5",{className:"title"},t))},ge=function(e){var t=e.dates;return r.a.createElement("span",{className:"exp_period"},function(e){var t,a=e.start,n=e.end,r=void 0===n?null:n,l=Object(O.a)(a,"MMMM yyyy");r?t=Object(O.a)(r,"MMMM yyyy"):(r=new Date,t="present");var i=Object(T.a)(r,a)+1,o=Math.floor(i/12);i=Math.ceil(i-12*o);var c="month".concat(i>1?"s":""),s="year".concat(o>1?"s":""),m="".concat(l," - ").concat(t),u="";return o>0&&(u="".concat(o," ").concat(s," ")),u="".concat(u).concat(i," ").concat(c),"".concat(m," (").concat(u,")")}(t))},ve=function(e){var t=e.t;if(!t)return r.a.createElement(X,null);var a=function(e){return e?(Array.isArray(e)||(e=[e]),e.length>0?e.filter((function(e){return e.length>0})).reduce((function(e,t){return"".concat(e,", ").concat(t)})):""):""},n=a([a(t.language),a(t.frameworks),a(t.storage)]);return r.a.createElement("p",null,r.a.createElement("b",null,"Tech Stack:")," ",n)},fe=function(e){var t=e.city,a=e.id,n=e.dates,l=e.description,i=e.techStack;return r.a.createElement("div",{className:"item",id:a},r.a.createElement("hr",null),r.a.createElement(pe,e),r.a.createElement("p",null,r.a.createElement(ge,{dates:n})," | ",r.a.createElement("span",{className:"location"},"(",t,")")),r.a.createElement("p",null,l),r.a.createElement(ve,{t:i}))},Ee=function(){return r.a.createElement("div",{className:"exp_list short_exp_list"},W.map((function(e,t){if(e.excess)return r.a.createElement(X,{key:t});var a=Object(ue.a)(Object(ue.a)({},e),{},{n:t+1});return r.a.createElement(fe,Object.assign({key:t},a))})))},he=function(){return r.a.useEffect((function(){document.title="CV: Dmytro Horkhover"})),r.a.createElement("div",null,r.a.createElement("header",null),r.a.createElement("main",null,r.a.createElement(M.a,null,r.a.createElement(A.a,{xs:9},r.a.createElement(j,null,r.a.createElement(Z,null)),r.a.createElement(j,null,r.a.createElement(Y,null)),r.a.createElement(j,null,r.a.createElement(me,null))),r.a.createElement(A.a,{xs:3},r.a.createElement(j,null,r.a.createElement(ce,null)))),r.a.createElement(j,null,r.a.createElement($,null)),r.a.createElement(j,null,r.a.createElement(ne,null)),r.a.createElement(j,null,r.a.createElement(ie,null)),r.a.createElement(j,null,r.a.createElement(Ee,null))),r.a.createElement("footer",null))},be=function(){return r.a.createElement("div",{className:"hobbies"},r.a.createElement("h4",null,"Hobbies"),r.a.createElement("p",null,"Traveling, Motorcycles, Gym, Football, Cars, Bicycles"))},ke=function(e,t){var a=e.title,n=e.content;return n||Array.isArray(n)&&n.length>0?(Array.isArray(n)||(n=[n]),n.length<=0?r.a.createElement(r.a.Fragment,null):(n=n.reduce((function(e,t){return"".concat(e,", ").concat(t)})),r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("b",null,a),":"),r.a.createElement("td",null,n)))):null},ye=function(e){var t=e.techStack;if(t){var a="".concat(Math.random());return r.a.createElement("div",null,r.a.createElement("h5",null,"Stack of technologies"),r.a.createElement(re.a,{id:a},r.a.createElement("tbody",null,r.a.createElement(ke,{title:"Language",content:t.language}),r.a.createElement(ke,{title:"Frameworks & Libs",content:t.frameworks}),r.a.createElement(ke,{title:"Production env",content:t.prod_env}),r.a.createElement(ke,{title:"Build Tool",content:t.build_tool}),r.a.createElement(ke,{title:"CI/CD",content:t.ci_cd}),r.a.createElement(ke,{title:"Storage",content:t.storage}),r.a.createElement(ke,{title:"VCS",content:t.vcs}),r.a.createElement(ke,{title:"Metrics System",content:t.metrics}))))}return null},we=function(e){var t=e.experiences,a=e.indexSuffix;if(t){var n=t.map((function(e,t){return t+=1,r.a.createElement(Je,{key:t,index:t,indexSuffix:a,experience:e})}));return r.a.createElement("div",null,n)}return null},_e=function(e){var t=e.name,a=e.url,n=e.target,l=void 0===n?"_blank":n;return r.a.createElement("li",null,r.a.createElement("a",{href:a,target:l},t||a))},Se=function(e){var t=e.links;return t?r.a.createElement("div",null,r.a.createElement("h5",null,"Links"),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement(_e,Object.assign({key:t},e))})))):r.a.createElement(r.a.Fragment,null)},De=function(e){var t=e.title,a=e.text;return"string"==typeof a&&a.length>0||Array.isArray(a)&&a.length>0?(Array.isArray(a)||(a=[a]),a=a.map((function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("div",null,r.a.createElement("h5",null,t),r.a.createElement("div",null,a))):null},Je=function(e){var t=e.experience,a=e.indexSuffix,n=e.index;return a&&(n=a+"."+n),t=Object(ue.a)({index:n},t),r.a.createElement("div",null,r.a.createElement("hr",{style:{margin:"2rem 0"}}),r.a.createElement(pe,t),r.a.createElement(ge,{dates:t.dates})," | ".concat(t.city),r.a.createElement(De,{title:"Description",text:t.description}),r.a.createElement(De,{title:"Responsibility",text:t.responsibility}),r.a.createElement(De,{title:"Achievements",text:t.achievements}),r.a.createElement(De,{title:"Current State",text:t.currentState}),r.a.createElement(ye,{expIndex:n,techStack:t.techStack}),r.a.createElement(Se,{links:t.links}),r.a.createElement(we,{experiences:t.inner,indexSuffix:n}))},xe=function(){var e=W.map((function(e,t){return r.a.createElement(Je,{key:t,index:t+1,experience:e})}));return r.a.createElement("div",null,e)},Ce=function(e,t){var a=e=Object(ue.a)({index:t+1},e),n=a.id,l=a.dates,i=a.showDates,o=a.inner;return r.a.createElement("li",{key:t},r.a.createElement("a",{href:"#"+n},r.a.createElement(de,e)),!(!1===i)&&r.a.createElement(r.a.Fragment,null," (",r.a.createElement(ge,{dates:l}),")"),o&&Me({exps:o}))},Me=function(e){var t=e.exps;return r.a.createElement("ul",{style:{listStyle:"none"}},t.map(Ce))},Ae=function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Table Of Contents"),Me({exps:W}))},je=function(){return r.a.createElement("div",null,r.a.createElement("h3",{style:{marginTop:"0px"}},"Experience"),r.a.createElement(Ae,null),r.a.createElement(xe,null))},Pe=function(){r.a.useEffect((function(){document.title="CV: Dmytro Horkhover"}));return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(j,null,r.a.createElement(Z,null))),r.a.createElement("main",null,r.a.createElement(M.a,null,r.a.createElement(A.a,{xs:3,className:"bg-dark"},r.a.createElement(ce,null),r.a.createElement(Y,null),r.a.createElement(be,null)),r.a.createElement(A.a,{xs:9},r.a.createElement(j,null,r.a.createElement(ne,null)),r.a.createElement(j,null,r.a.createElement($,{importantOnly:!1})),r.a.createElement(j,null,r.a.createElement(ie,null)),r.a.createElement(j,null,r.a.createElement(je,null))))),r.a.createElement("footer",null))},Ge=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{bg:"dark",variant:"dark",expand:"md"},r.a.createElement(i.a.Brand,{as:m.b,to:C.home.url()},"Dmytro Horkhover"),r.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(o.a,{className:"mr-auto"},r.a.createElement(o.a.Link,{as:m.b,to:C.home.url()},"Home"),r.a.createElement(o.a.Link,{as:m.b,to:C.blog.url()},"Blog"),r.a.createElement(c.a,{title:"CV",id:"basic-nav-dropdown"},r.a.createElement(c.a.Item,{as:m.b,to:C.cv_main.url()},"Main CV"),r.a.createElement(c.a.Divider,null),r.a.createElement(c.a.Item,{as:m.b,to:C.cv_tech.url()},"Technical CV"))),r.a.createElement(o.a,{className:"mr-right"},r.a.createElement(S,null)))))},Ie=function(){return r.a.createElement(s.a,{fluid:"lg",className:"main-container"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:C.home.url(),component:P}),r.a.createElement(u.a,{exact:!0,path:C.blog.url(),component:x}),r.a.createElement(u.a,{exact:!0,path:C.cv_tech.url(),component:Pe}),r.a.createElement(u.a,{exact:!0,path:C.cv_main.url(),component:he})))},Le=function(){return r.a.createElement(m.a,{basename:""},r.a.createElement(Ge,null),r.a.createElement(Ie,null))};a(74);Object(l.render)(r.a.createElement(Le,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.b7780ca0.chunk.js.map