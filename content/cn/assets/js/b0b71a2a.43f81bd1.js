"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[96128],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>g});var i=t(11504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,i,o=function(e,r){if(null==e)return{};var t,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var r=i.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return i.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return t?i.createElement(g,a(a({ref:r},p),{},{components:t})):i.createElement(g,a({ref:r},p))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,a=new Array(n);a[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<n;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50284:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var i=t(45072),o=(t(11504),t(95788));const n={title:"Metrics",keywords:["hudi","administration","operation","devops","metrics"],summary:"This section offers an overview of metrics in Hudi",toc:!0,last_modified_at:new Date("2020-06-20T19:59:57.000Z")},a=void 0,s={unversionedId:"metrics",id:"version-0.12.1/metrics",title:"Metrics",description:"In this section, we will introduce the MetricsReporter and HoodieMetrics in Hudi. You can view the metrics-related configurations here.",source:"@site/versioned_docs/version-0.12.1/metrics.md",sourceDirName:".",slug:"/metrics",permalink:"/cn/docs/0.12.1/metrics",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.1/metrics.md",tags:[],version:"0.12.1",frontMatter:{title:"Metrics",keywords:["hudi","administration","operation","devops","metrics"],summary:"This section offers an overview of metrics in Hudi",toc:!0,last_modified_at:"2020-06-20T19:59:57.000Z"},sidebar:"docs",previous:{title:"CLI",permalink:"/cn/docs/0.12.1/cli"},next:{title:"Encryption",permalink:"/cn/docs/0.12.1/encryption"}},l=[{value:"MetricsReporter",id:"metricsreporter",children:[{value:"JmxMetricsReporter",id:"jmxmetricsreporter",children:[{value:"Configurations",id:"configurations",children:[],level:4},{value:"Demo",id:"demo",children:[],level:4}],level:3},{value:"MetricsGraphiteReporter",id:"metricsgraphitereporter",children:[{value:"Configurations",id:"configurations-1",children:[],level:4},{value:"Demo",id:"demo-1",children:[],level:4}],level:3},{value:"DatadogMetricsReporter",id:"datadogmetricsreporter",children:[{value:"Configurations",id:"configurations-2",children:[],level:4},{value:"Demo",id:"demo-2",children:[],level:4}],level:3},{value:"PrometheusMetricsReporter",id:"prometheusmetricsreporter",children:[],level:3},{value:"AWS CloudWatchReporter",id:"aws-cloudwatchreporter",children:[],level:3},{value:"UserDefinedMetricsReporter",id:"userdefinedmetricsreporter",children:[{value:"Configurations",id:"configurations-3",children:[],level:4},{value:"Demo",id:"demo-3",children:[],level:4}],level:3}],level:2},{value:"HoodieMetrics",id:"hoodiemetrics",children:[],level:2}],c={toc:l},p="wrapper";function d(e){let{components:r,...n}=e;return(0,o.yg)(p,(0,i.c)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"In this section, we will introduce the ",(0,o.yg)("inlineCode",{parentName:"p"},"MetricsReporter")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"HoodieMetrics")," in Hudi. You can view the metrics-related configurations ",(0,o.yg)("a",{parentName:"p",href:"configurations#METRICS"},"here"),"."),(0,o.yg)("h2",{id:"metricsreporter"},"MetricsReporter"),(0,o.yg)("p",null,"MetricsReporter provides APIs for reporting ",(0,o.yg)("inlineCode",{parentName:"p"},"HoodieMetrics")," to user-specified backends. Currently, the implementations include InMemoryMetricsReporter, JmxMetricsReporter, MetricsGraphiteReporter and DatadogMetricsReporter. Since InMemoryMetricsReporter is only used for testing, we will introduce the other three implementations."),(0,o.yg)("h3",{id:"jmxmetricsreporter"},"JmxMetricsReporter"),(0,o.yg)("p",null,"JmxMetricsReporter is an implementation of JMX reporter, which used to report JMX metrics."),(0,o.yg)("h4",{id:"configurations"},"Configurations"),(0,o.yg)("p",null,"The following is an example of ",(0,o.yg)("inlineCode",{parentName:"p"},"JmxMetricsReporter"),". More detailed configurations can be referenced ",(0,o.yg)("a",{parentName:"p",href:"configurations#Metrics-Configurations-for-Jmx"},"here"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=JMX\nhoodie.metrics.jmx.host=192.168.0.106\nhoodie.metrics.jmx.port=4001\n")),(0,o.yg)("h4",{id:"demo"},"Demo"),(0,o.yg)("p",null,"As configured above, JmxMetricsReporter will started JMX server on port 4001. We can start a jconsole to connect to 192.168.0.106:4001. Below is an illustration of monitoring Hudi JMX metrics through jconsole."),(0,o.yg)("figure",null,(0,o.yg)("img",{className:"docimage",src:t(1032).c,alt:"hudi_jxm_metrics.png"})),(0,o.yg)("h3",{id:"metricsgraphitereporter"},"MetricsGraphiteReporter"),(0,o.yg)("p",null,"MetricsGraphiteReporter is an implementation of Graphite reporter, which connects to a Graphite server, and send ",(0,o.yg)("inlineCode",{parentName:"p"},"HoodieMetrics")," to it."),(0,o.yg)("h4",{id:"configurations-1"},"Configurations"),(0,o.yg)("p",null,"The following is an example of ",(0,o.yg)("inlineCode",{parentName:"p"},"MetricsGraphiteReporter"),". More detaile configurations can be referenced ",(0,o.yg)("a",{parentName:"p",href:"configurations#Metrics-Configurations-for-Graphite"},"here"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=GRAPHITE\nhoodie.metrics.graphite.host=192.168.0.106\nhoodie.metrics.graphite.port=2003\nhoodie.metrics.graphite.metric.prefix=<your metrics prefix>\n")),(0,o.yg)("h4",{id:"demo-1"},"Demo"),(0,o.yg)("p",null,"As configured above, assuming a Graphite server is running on host 192.168.0.106 and port 2003, a running Hudi job will connect and report metrics data to it. Below is an illustration of monitoring hudi metrics through Graphite."),(0,o.yg)("figure",null,(0,o.yg)("img",{className:"docimage",src:t(76748).c,alt:"hudi_graphite_metrics.png"})),(0,o.yg)("h3",{id:"datadogmetricsreporter"},"DatadogMetricsReporter"),(0,o.yg)("p",null,"DatadogMetricsReporter is an implementation of Datadog reporter.\nA reporter which publishes metric values to Datadog monitoring service via Datadog HTTP API."),(0,o.yg)("h4",{id:"configurations-2"},"Configurations"),(0,o.yg)("p",null,"The following is an example of ",(0,o.yg)("inlineCode",{parentName:"p"},"DatadogMetricsReporter"),". More detailed configurations can be referenced ",(0,o.yg)("a",{parentName:"p",href:"configurations#Metrics-Configurations-for-Datadog-reporter"},"here"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=DATADOG\nhoodie.metrics.datadog.api.site=EU # or US\nhoodie.metrics.datadog.api.key=<your api key>\nhoodie.metrics.datadog.metric.prefix=<your metrics prefix>\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"hoodie.metrics.datadog.api.site")," will set the Datadog API site, which determines whether the requests will be sent to api.datadoghq.eu (EU) or api.datadoghq.com (US). Set this according to your Datadog account settings."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"hoodie.metrics.datadog.api.key")," will set the api key."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"hoodie.metrics.datadog.metric.prefix")," will help segregate metrics by setting different prefixes for different jobs. Note that it will use ",(0,o.yg)("inlineCode",{parentName:"li"},".")," to delimit the prefix and the metric name. For example, if the prefix is set to ",(0,o.yg)("inlineCode",{parentName:"li"},"foo"),", then ",(0,o.yg)("inlineCode",{parentName:"li"},"foo.")," will be prepended to the metric name.")),(0,o.yg)("h4",{id:"demo-2"},"Demo"),(0,o.yg)("p",null,"In this demo, we ran a ",(0,o.yg)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," job with ",(0,o.yg)("inlineCode",{parentName:"p"},"HoodieMetrics")," turned on and other configurations set properly."),(0,o.yg)("figure",null,(0,o.yg)("img",{className:"docimage",src:t(25569).c,alt:"hudi_datadog_metrics.png"})),(0,o.yg)("p",null," As shown above, we were able to collect Hudi's action-related metrics like"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"<prefix>.<table name>.commit.totalScanTime"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"<prefix>.<table name>.clean.duration"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"<prefix>.<table name>.index.lookup.duration")),(0,o.yg)("p",{parentName:"li"},"as well as ",(0,o.yg)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer"),"-specific metrics")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"<prefix>.<table name>.deltastreamer.duration"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"<prefix>.<table name>.deltastreamer.hiveSyncDuration")))),(0,o.yg)("h3",{id:"prometheusmetricsreporter"},"PrometheusMetricsReporter"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," is an open source systems monitoring and alerting toolkit.\nPrometheus has a ",(0,o.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/pushing/"},"PushGateway")," that Apache Hudi can leverage for metrics reporting.\nFollow ",(0,o.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/first_steps/"},"Prometheus documentation")," for basic setup instructions."),(0,o.yg)("p",null,"Similar to other supported reporters, the following attributes are required to enable pushgateway reporters:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=PROMETHEUS_PUSHGATEWAY\n")),(0,o.yg)("p",null,"The following properties are used to configure the address and port number of pushgateway. The default address is\nlocalhost, and the default port is 9091"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"hoodie.metrics.pushgateway.host=xxxx\nhoodie.metrics.pushgateway.port=9091\n")),(0,o.yg)("p",null,"You can configure whether to delete the monitoring information from pushgateway at the end of the task, the default is true"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"hoodie.metrics.pushgateway.delete.on.shutdown=false\n")),(0,o.yg)("p",null,"You can configure the task name prefix and whether a random suffix is required. The default is true"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"hoodie.metrics.pushgateway.job.name=xxxx\nhoodie.metrics.pushgateway.random.job.name.suffix=false\n")),(0,o.yg)("h3",{id:"aws-cloudwatchreporter"},"AWS CloudWatchReporter"),(0,o.yg)("p",null,"Hudi supports publishing metrics to Amazon CloudWatch. It can be configured by setting ",(0,o.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#hoodiemetricsreportertype"},(0,o.yg)("inlineCode",{parentName:"a"},"hoodie.metrics.reporter.type")),"\nto \u201cCLOUDWATCH\u201d. Static AWS credentials to be used can be configured using\n",(0,o.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#hoodieawsaccesskey"},(0,o.yg)("inlineCode",{parentName:"a"},"hoodie.aws.access.key")),",\n",(0,o.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#hoodieawssecretkey"},(0,o.yg)("inlineCode",{parentName:"a"},"hoodie.aws.secret.key")),",\n",(0,o.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#hoodieawssessiontoken"},(0,o.yg)("inlineCode",{parentName:"a"},"hoodie.aws.session.token"))," properties.\nIn the absence of static AWS credentials being configured, ",(0,o.yg)("inlineCode",{parentName:"p"},"DefaultAWSCredentialsProviderChain")," will be used to get\ncredentials by checking environment properties. Additional Amazon CloudWatch reporter specific properties that can be\ntuned are in the ",(0,o.yg)("inlineCode",{parentName:"p"},"HoodieMetricsCloudWatchConfig")," class."),(0,o.yg)("h3",{id:"userdefinedmetricsreporter"},"UserDefinedMetricsReporter"),(0,o.yg)("p",null,"Allows users to define a custom metrics reporter."),(0,o.yg)("h4",{id:"configurations-3"},"Configurations"),(0,o.yg)("p",null,"The following is an example of ",(0,o.yg)("inlineCode",{parentName:"p"},"UserDefinedMetricsReporter"),". More detailed configurations can be referenced ",(0,o.yg)("a",{parentName:"p",href:"configurations#Metrics-Configurations"},"here"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.on=true\nhoodie.metrics.reporter.class=test.TestUserDefinedMetricsReporter\n")),(0,o.yg)("h4",{id:"demo-3"},"Demo"),(0,o.yg)("p",null,"In this simple demo, TestMetricsReporter will print all gauges every 10 seconds"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'public static class TestUserDefinedMetricsReporter \n    extends AbstractUserDefinedMetricsReporter {\n  private static final Logger log = LogManager.getLogger(DummyMetricsReporter.class);\n\n  private ScheduledExecutorService exec = Executors.newScheduledThreadPool(1, r -> {\n      Thread t = Executors.defaultThreadFactory().newThread(r);\n      t.setDaemon(true);\n      return t;\n  });\n\n  public TestUserDefinedMetricsReporter(Properties props, MetricRegistry registry) {\n    super(props, registry);\n  }\n\n  @Override\n  public void start() {\n    exec.schedule(this::report, 10, TimeUnit.SECONDS);\n  }\n\n  @Override\n  public void report() {\n    this.getRegistry().getGauges().forEach((key, value) -> \n      log.info("key: " + key + " value: " + value.getValue().toString()));\n  }\n\n  @Override\n  public Closeable getReporter() {\n    return null;\n  }\n\n  @Override\n  public void stop() {\n    exec.shutdown();\n  }\n}\n')),(0,o.yg)("h2",{id:"hoodiemetrics"},"HoodieMetrics"),(0,o.yg)("p",null,"Once the Hudi writer is configured with the right table and environment for ",(0,o.yg)("inlineCode",{parentName:"p"},"HoodieMetrics"),", it produces the following ",(0,o.yg)("inlineCode",{parentName:"p"},"HoodieMetrics"),", that aid in debugging hudi tables"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Commit Duration")," - The amount of time it took to successfully commit a batch of records"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Rollback Duration")," - Similarly, the amount of time taken to undo partial data left over by a failed commit (rollback happens automatically after a failing write)"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"File Level metrics")," - Shows the amount of new files added, versions, deleted (cleaned) in each commit"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Record Level Metrics")," - Total records inserted/updated etc per commit"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Partition Level metrics")," - number of partitions upserted (super useful to understand sudden spikes in commit duration)")),(0,o.yg)("p",null,"These ",(0,o.yg)("inlineCode",{parentName:"p"},"HoodieMetrics")," can then be plotted on a standard tool like grafana. Below is a sample commit duration chart."),(0,o.yg)("figure",null,(0,o.yg)("img",{className:"docimage",src:t(60568).c,alt:"hudi_commit_duration.png"})))}d.isMDXComponent=!0},25569:(e,r,t)=>{t.d(r,{c:()=>i});const i=t.p+"assets/images/2020-05-28-datadog-metrics-demo-fff08d34cd7ef2473f16e9b48dd66793.png"},60568:(e,r,t)=>{t.d(r,{c:()=>i});const i=t.p+"assets/images/hudi_commit_duration-64b7b65fc946ab2d6b69ffdf6f5bb9b0.png"},76748:(e,r,t)=>{t.d(r,{c:()=>i});const i=t.p+"assets/images/hudi_graphite_metrics-095040421628091f1e447e385189aa5d.png"},1032:(e,r,t)=>{t.d(r,{c:()=>i});const i=t.p+"assets/images/hudi_jxm_metrics-477d99943f7bc84f9063e4ce2787cc6c.png"}}]);