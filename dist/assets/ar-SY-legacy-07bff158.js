System.register([],(function(e,o){"use strict";return{execute:function(){var o=e("languageName","إنجليزي"),t=e("checkEverySecond","تحقق من كل {0} ثانية"),a=e("retryCheckEverySecond","أعد محاولة كل {0} ثانية"),s=e("resendEveryXTimes","إعادة تقديم كل {0} مرات"),n=e("resendDisabled","إعادة الالتزام بالتعطيل"),r=e("retriesDescription","الحد الأقصى لإعادة المحاولة قبل تمييز الخدمة على أنها لأسفل وإرسال إشعار"),i=e("ignoreTLSError","تجاهل خطأ TLS/SSL لمواقع HTTPS"),c=e("upsideDownModeDescription","اقلب الحالة رأسًا على عقب. إذا كانت الخدمة قابلة للوصول إلى أسفل."),l=e("maxRedirectDescription","الحد الأقصى لعدد إعادة التوجيه لمتابعة. ضبط على 0 لتعطيل إعادة التوجيه."),d=e("enableGRPCTls","السماح لإرسال طلب GRPC مع اتصال TLS"),u=e("grpcMethodDescription","يتم تحويل اسم الطريقة إلى تنسيق Cammelcase مثل Sayhello Check وما إلى ذلك."),p=e("acceptedStatusCodesDescription","حدد رموز الحالة التي تعتبر استجابة ناجحة."),m=e("Maintenance","صيانة"),g=e("statusMaintenance","صيانة"),h=e("recurringIntervalMessage","ركض مرة واحدة كل يوم | قم بالتشغيل مرة واحدة كل يوم {0}"),y=e("affectedMonitorsDescription","حدد المراقبين المتأثرة بالصيانة الحالية"),S=e("affectedStatusPages","إظهار رسالة الصيانة هذه على صفحات الحالة المحددة"),D=e("atLeastOneMonitor","حدد شاشة واحدة على الأقل من المتأثرين"),T=e("passwordNotMatchMsg","كلمة المرور المتكررة لا تتطابق."),k=e("notificationDescription","يجب تعيين الإخطارات إلى شاشة للعمل."),P=e("keywordDescription","ابحث في الكلمة الرئيسية في استجابة HTML العادية أو JSON. البحث حساس للحالة."),b=e("pauseDashboardHome","وقفة"),A=e("deleteMonitorMsg","هل أنت متأكد من حذف هذا الشاشة؟"),M=e("deleteMaintenanceMsg","هل أنت متأكد من حذف هذه الصيانة؟"),w=e("deleteNotificationMsg","هل أنت متأكد من حذف هذا الإشعار لجميع الشاشات؟"),v=e("dnsPortDescription","منفذ خادم DNS. الافتراضيات إلى 53. يمكنك تغيير المنفذ في أي وقت."),f=e("resolverserverDescription","CloudFlare هو الخادم الافتراضي. يمكنك تغيير خادم المحوّل في أي وقت."),C=e("rrtypeDescription","حدد نوع RR الذي تريد مراقبته"),R=e("pauseMonitorMsg","هل أنت متأكد من أن تتوقف مؤقتًا؟"),I=e("enableDefaultNotificationDescription","سيتم تمكين هذا الإشعار افتراضيًا للشاشات الجديدة. لا يزال بإمكانك تعطيل الإخطار بشكل منفصل لكل شاشة."),L=e("clearEventsMsg","هل أنت متأكد من حذف جميع الأحداث لهذا الشاشة؟"),N=e("clearHeartbeatsMsg","هل أنت متأكد من حذف جميع دقات القلب لهذا الشاشة؟"),U=e("confirmClearStatisticsMsg","هل أنت متأكد من أنك تريد حذف جميع الإحصائيات؟"),E=e("importHandleDescription","اختر 'تخطي موجود' إذا كنت تريد تخطي كل شاشة أو إشعار بنفس الاسم. 'الكتابة فوق' سوف يحذف كل شاشة وإخطار موجود."),H=e("confirmImportMsg","هل أنت متأكد من أنك تريد استيراد النسخ الاحتياطي؟ يرجى التحقق من أنك حددت خيار الاستيراد الصحيح."),x=e("twoFAVerifyLabel","الرجاء إدخال الرمز المميز الخاص بك للتحقق من 2FA"),F=e("tokenValidSettingsMsg","الرمز المميز صالح! يمكنك الآن حفظ إعدادات 2FA."),G=e("confirmEnableTwoFAMsg","هل أنت متأكد من أنك تريد تمكين 2FA؟"),O=e("confirmDisableTwoFAMsg","هل أنت متأكد من أنك تريد تعطيل 2FA؟"),K=e("Settings","إعدادات"),W=e("Dashboard","لوحة التحكم"),B=e("Language","لغة"),V=e("Appearance","مظهر"),j=e("Theme","سمة"),q=e("General","عام"),z=e("Version","الإصدار"),J=e("List","قائمة"),Q=e("Add","يضيف"),Y=e("Up","فوق"),X=e("Down","أسفل"),Z=e("Pending","قيد الانتظار"),_=e("Unknown","غير معرّف"),$=e("Pause","إيقاف مؤقت"),ee=e("Name","الاسم"),oe=e("Status","الحالة"),te=e("DateTime","الوقت والتاريخ"),ae=e("Message","الرسالة"),se=e("Resume","استمرار"),ne=e("Edit","تعديل"),re=e("Delete","حذف"),ie=e("Current","حالي"),ce=e("Uptime","مدة التشغيل"),le=e("Monitor","مراقب | مراقبات"),de=e("day","يوم | أيام"),ue=e("hour","ساعة"),pe=e("Response","استجاية"),me=e("Ping","بينغ"),ge=e("Keyword","كلمة مفتاحية"),he=e("URL","عنوان URL"),ye=e("Hostname","اسم المضيف"),Se=e("Port","المنفذ"),De=e("Retries","يحاول مجدداً"),Te=e("Advanced","متقدم"),ke=e("needPushEvery","يجب عليك استدعاء عنوان URL هذا كل ثانية."),Pe=e("pushOptionalParams","المعلمات الاختيارية"),be=e("Save","يحفظ"),Ae=e("Notifications","إشعارات"),Me=e("Light","نور"),we=e("Dark","داكن"),ve=e("Auto","آلي"),fe=e("Normal","طبيعي"),Ce=e("Bottom","الأسفل"),Re=e("None","لا أحد"),Ie=e("Timezone","وحدة زمنية"),Le=e("Logout","تسجيل خروج"),Ne=e("Leave","غادر"),Ue=e("Confirm","يتأكد"),Ee=e("Yes","نعم"),He=e("No","رقم"),xe=e("Username","اسم المستخدم"),Fe=e("Password","كلمة المرور"),Ge=e("Login","تسجيل الدخول"),Oe=e("Email","بريد إلكتروني"),Ke=e("Test","امتحان"),We=e("Export","يصدّر"),Be=e("Import","يستورد"),Ve=e("respTime","resp. الوقت (MS)"),je=e("notAvailableShort","ن/أ"),qe=e("Create","خلق"),ze=e("Events","الأحداث"),Je=e("Heartbeats","نبضات القلب"),Qe=e("backupDescription","يمكنك النسخ الاحتياطي لجميع الشاشات والإشعارات في ملف JSON."),Ye=e("backupDescription2","ملحوظة"),Xe=e("backupDescription3","يتم تضمين البيانات الحساسة مثل الرموز الإخطار في ملف التصدير ؛ يرجى تخزين التصدير بشكل آمن."),Ze=e("alertNoFile","الرجاء تحديد ملف للاستيراد."),_e=e("alertWrongFileType","الرجاء تحديد ملف JSON."),$e=e("Overwrite","الكتابة فوق"),eo=e("Options","خيارات"),oo=e("Active","نشيط"),to=e("Inactive","غير نشط"),ao=e("Token","رمز"),so=e("Tags","العلامات"),no=e("color","اللون"),ro=e("Gray","رمادي"),io=e("Red","أحمر"),co=e("Orange","البرتقالي"),lo=e("Green","لون أخضر"),uo=e("Blue","أزرق"),po=e("Indigo","النيلي"),mo=e("Purple","نفسجي"),go=e("Pink","لون القرنفل"),ho=e("Custom","العادة"),yo=e("statusPageNothing","لا شيء هنا الرجاء إضافة مجموعة أو شاشة."),So=e("defaultNotificationName","تنبيه {الإخطار} ({number})"),Do=e("here","هنا"),To=e("Required","مطلوب"),ko=e("telegram","برقية"),Po=e("ZohoCliq","Zohocliq"),bo=e("wayToGetTelegramToken","يمكنك الحصول على رمز من {0}."),Ao=e("telegramMessageThreadID","معرف المواضيع"),Mo=e("supportTelegramChatID","دعم الدردشة المباشرة / معرف الدردشة للقناة"),wo=e("wayToGetTelegramChatID","يمكنك الحصول على معرف الدردشة الخاص بك عن طريق إرسال رسالة إلى الروبوت والانتقال إلى عنوان URL هذا لعرض Chat_id"),vo=e("chatIDNotFound","لم يتم العثور على معرف الدردشة ؛ الرجاء إرسال رسالة إلى هذا الروبوت أولاً"),fo=e("webhook","webhook"),Co=e("webhookJsonDesc","{0} مفيد لأي خوادم HTTP الحديثة مثل Express.js"),Ro=e("webhookFormDataDesc","{multipart} مفيد لـ PHP. سيحتاج JSON إلى تحليل {decodefunction}"),Io=e("webhookAdditionalHeadersTitle","رؤوس إضافية"),Lo=e("webhookAdditionalHeadersDesc","يحدد رؤوس إضافية مرسلة مع webhook."),No=e("smtp","البريد الإلكتروني (SMTP)"),Uo=e("secureOptionNone","لا شيء / startTls (25 587)"),Eo=e("secureOptionTLS","TLS (465)"),Ho=e("emailCustomSubject","موضوع مخصص"),xo=e("smtpCC","نسخة"),Fo=e("smtpBCC","BCC"),Go=e("discord","خلاف"),Oo=e("wayToGetDiscordURL","يمكنك الحصول على هذا بالانتقال إلى إعدادات الخادم -> عمليات التكامل -> عرض الخطافات على الويب -> خطاف ويب جديد"),Ko=e("teams","فرق Microsoft"),Wo=e("wayToGetTeamsURL","يمكنك معرفة كيفية إنشاء عنوان URL webhook {0}."),Bo=e("wayToGetZohoCliqURL","يمكنك معرفة كيفية إنشاء عنوان URL webhook {0}."),Vo=e("signal","الإشارة"),jo=e("Recipients","المستلمين"),qo=e("needSignalAPI","تحتاج إلى وجود عميل إشارة مع REST API."),zo=e("wayToCheckSignalURL","يمكنك التحقق من عنوان URL هذا لعرض كيفية إعداد واحد"),Jo=e("signalImportant","مهم"),Qo=e("gotify","gotify"),Yo=e("Priority","أولوية"),Xo=e("slack","تثاقل"),Zo=e("aboutWebhooks","مزيد من المعلومات حول Webhooks ON"),_o=e("aboutChannelName","أدخل اسم القناة في حقل اسم القناة {0} إذا كنت تريد تجاوز قناة WebHook. السابق"),$o=e("aboutKumaURL","إذا تركت حقل URL في وقت التشغيل KUMA فارغًا ، فسيتم افتراضيًا إلى صفحة GitHub Project."),et=e("emojiCheatSheet","ورقة الغش في الرموز التعبيرية"),ot=e("pushover","مهمة سهلة"),tt=e("pushy","انتهازي"),at=e("PushByTechulus","دفع بواسطة Techulus"),st=e("octopush","أوكتوبوش"),nt=e("promosms","الترويجيات"),rt=e("clicksendsms","نقرات SMS"),it=e("lunasea","لوناسيا"),ct=e("apprise","إبلاغ (دعم 50+ خدمات الإخطار)"),lt=e("GoogleChat","دردشة Google"),dt=e("pushbullet","حماس"),ut=e("Kook","كووك"),pt=e("wayToGetKookBotToken","قم بإنشاء تطبيق واحصل على رمز الروبوت الخاص بك على {0}"),mt=e("wayToGetKookGuildID","قم بتشغيل 'وضع المطور' في إعداد Kook وانقر بزر الماوس الأيمن على النقابة للحصول على معرفه"),gt=e("line","خط"),ht=e("mattermost","المادة"),yt=e("Device","جهاز"),St=e("pushoverDesc1","أولوية الطوارئ (2) لها مهلة افتراضية 30 ثانية بين إعادة المحاولة وستنتهي صلاحيتها بعد ساعة واحدة."),Dt=e("pushoverDesc2","إذا كنت ترغب في إرسال إشعارات إلى أجهزة مختلفة ، قم بملء حقل الجهاز."),Tt=e("octopushTypePremium","قسط (سريع - موصى به للتنبيه)"),kt=e("octopushTypeLowCost","التكلفة المنخفضة (بطيئة - تم حظرها أحيانًا بواسطة المشغل)"),Pt=e("checkPrice","تحقق من الأسعار {0}"),bt=e("apiCredentials","بيانات اعتماد API"),At=e("octopushLegacyHint","هل تستخدم الإصدار القديم من Octopush (2011-2020) أو الإصدار الجديد؟"),Mt=e("octopushPhoneNumber","رقم الهاتف (تنسيق intl على سبيل المثال"),wt=e("octopushSMSSender","اسم مرسل الرسائل القصيرة"),vt=e("Example","مثال"),ft=e("appriseInstalled","تم تثبيت Prosise."),Ct=e("appriseNotInstalled","الإبرام غير مثبت. {0}"),Rt=e("lineDevConsoleTo","وحدة المطورين Line Console - {0}"),It=e("wayToGetLineChannelToken","قم أولاً بالوصول إلى {0} إنشاء مزود وقناة (واجهة برمجة تطبيقات المراسلة) ، ثم يمكنك الحصول على رمز الوصول إلى القناة ومعرف المستخدم من عناصر القائمة المذكورة أعلاه."),Lt=e("aboutIconURL",'يمكنك توفير رابط لصورة في "Icon URL" لتجاوز صورة الملف الشخصي الافتراضي. لن يتم استخدامه إذا تم تعيين رمز رمز رمز.'),Nt=e("aboutMattermostChannelName",'يمكنك تجاوز القناة الافتراضية التي تنشرها WebHook من خلال إدخال اسم القناة في "Channel Name" الحقل. يجب تمكين هذا في إعدادات Webhook Mattern. السابق'),Ut=e("matrix","مصفوفة"),Et=e("promosmsTypeEco","SMS Eco - رخيصة ولكن بطيئة وغالبًا ما تكون محملة. يقتصر فقط على المستفيدين البولنديين."),Ht=e("promosmsTypeFlash","SMS Flash - سيتم عرض الرسالة تلقائيًا على جهاز المستلم. يقتصر فقط على المستفيدين البولنديين."),xt=e("promosmsTypeFull","SMS Full - Tier Premium SMS يمكنك استخدام اسم المرسل الخاص بك (تحتاج إلى تسجيل الاسم أولاً). موثوقة للتنبيهات."),Ft=e("promosmsTypeSpeed","سرعة الرسائل القصيرة - أولوية قصوى في النظام. سريع وموثوق للغاية ولكنه مكلف (حوالي مرتين من الرسائل القصيرة السعر الكامل)."),Gt=e("promosmsPhoneNumber","رقم الهاتف (للمستلم البولندي ، يمكنك تخطي رموز المنطقة)"),Ot=e("promosmsSMSSender","اسم مرسل الرسائل القصيرة"),Kt=e("promosmsAllowLongSMS","السماح الرسائل القصيرة الطويلة"),Wt=e("matrixHomeserverURL","عنوان URL HomeServer (مع HTTP (S)"),Bt=e("matrixDesc1","يمكنك العثور على معرف الغرفة الداخلي من خلال البحث في القسم المتقدم من إعدادات الغرفة في عميل Matrix الخاص بك. يجب أن تبدو مثل! QMDRCPUIFLWSFJXYE6"),Vt=e("matrixDesc2","يوصى بشدة بإنشاء مستخدم جديد ولا تستخدم رمز الوصول إلى مستخدم Matrix الخاص بك لأنه سيتيح الوصول الكامل إلى حسابك وجميع الغرف التي انضمت إليها. بدلاً من ذلك ، قم بإنشاء مستخدم جديد ودعوته فقط إلى الغرفة التي تريد تلقيها الإشعار فيها. يمكنك الحصول على رمز الوصول عن طريق تشغيل {0}"),jt=e("Method","طريقة"),qt=e("Body","الجسم"),zt=e("Headers","الرؤوس"),Jt=e("PushUrl","دفع عنوان URL"),Qt=e("HeadersInvalidFormat","رؤوس الطلبات غير صالحة JSON"),Yt=e("BodyInvalidFormat","هيئة الطلب غير صالحة JSON"),Xt=e("clearDataOlderThan","الحفاظ على بيانات سجل المراقبة للأيام {0}."),Zt=e("PasswordsDoNotMatch","كلمة المرور غير مطابقة."),_t=e("records","السجلات"),$t=e("steamApiKeyDescription","لمراقبة خادم لعبة Steam ، تحتاج إلى مفتاح Steam Web-API. يمكنك تسجيل مفتاح API الخاص بك هنا"),ea=e("topic","عنوان"),oa=e("topicExplanation","موضوع MQTT لرصد"),ta=e("successMessage","نجاح رسالة"),aa=e("successMessageExplanation","رسالة MQTT التي ستعتبر نجاحًا"),sa=e("recent","الأخيرة"),na=e("Done","فعله"),ra=e("Info","معلومات"),ia=e("Security","حماية"),ca=e("Default","تقصير"),la=e("Title","لقب"),da=e("Content","المحتوى"),ua=e("Style","أسلوب"),pa=e("info","معلومات"),ma=e("warning","تحذير"),ga=e("danger","خطر"),ha=e("error","خطأ"),ya=e("critical","شديد الأهمية"),Sa=e("primary","الأولية"),Da=e("light","نور"),Ta=e("dark","ظلام"),ka=e("Post","بريد"),Pa=e("Created","مخلوق"),ba=e("Unpin","إلغاء"),Aa=e("Description","وصف"),Ma=e("Services","خدمات"),wa=e("Discard","تجاهل"),va=e("Cancel","يلغي"),fa=e("shrinkDatabaseDescription","تشغيل فراغ قاعدة البيانات لـ SQLite. إذا تم إنشاء قاعدة البيانات الخاصة بك بعد تمكين 1.10.0 AUTO_VACUUM بالفعل ولا يلزم هذا الإجراء."),Ca=e("serwersms","Serwersms.pl"),Ra=e("serwersmsAPIUser","اسم مستخدم API (بما في ذلك بادئة WebAPI_)"),Ia=e("serwersmsAPIPassword","كلمة مرور API"),La=e("serwersmsPhoneNumber","رقم الهاتف"),Na=e("serwersmsSenderName","اسم مرسل الرسائل القصيرة (مسجل عبر بوابة العملاء)"),Ua=e("smseagle","smseagle"),Ea=e("smseagleTo","أرقام الهواتف)"),Ha=e("smseagleGroup","اسم مجموعة كتب الهاتف (S)"),xa=e("smseagleContact","كتاب الاتصال اسم (S)"),Fa=e("smseagleRecipientType","نوع المستلم"),Ga=e("smseagleRecipient","المتلقي (المتلقيين) (يجب فصل المتعددة مع فاصلة)"),Oa=e("smseagleToken","API وصول الرمز المميز"),Ka=e("smseagleUrl","عنوان URL لجهاز SMSEGLE الخاص بك"),Wa=e("smseagleEncoding","إرسال Unicode"),Ba=e("smseaglePriority","أولوية الرسالة (0-9 افتراضي = 0)"),Va=e("stackfield","Stackfield"),ja=e("Customize","يعدل أو يكيف"),qa=e("smtpDkimSettings","إعدادات DKIM"),za=e("smtpDkimDesc","يرجى الرجوع إلى Nodemailer dkim {0} للاستخدام."),Ja=e("documentation","توثيق"),Qa=e("smtpDkimDomain","اسم النطاق"),Ya=e("smtpDkimKeySelector","المحدد الرئيسي"),Xa=e("smtpDkimPrivateKey","مفتاح سري"),Za=e("smtpDkimHashAlgo","خوارزمية التجزئة (اختياري)"),_a=e("smtpDkimheaderFieldNames","مفاتيح الرأس للتوقيع (اختياري)"),$a=e("smtpDkimskipFields","مفاتيح الرأس لا توقيع (اختياري)"),es=e("wayToGetPagerDutyKey",'يمكنك الحصول على هذا عن طريق الانتقال إلى الخدمة -> دليل الخدمة -> (حدد خدمة) -> تكامل -> إضافة التكامل. هنا يمكنك البحث عن "Events API V2". مزيد من المعلومات {0}'),os=e("gorush","جورش"),ts=e("alerta","أليتا"),as=e("alertaApiEndpoint","نقطة نهاية API"),ss=e("alertaEnvironment","بيئة"),ns=e("alertaApiKey","مفتاح API"),rs=e("alertaAlertState","حالة التنبيه"),is=e("alertaRecoverState","استعادة الدولة"),cs=e("deleteStatusPageMsg","هل أنت متأكد من حذف صفحة الحالة هذه؟"),ls=e("Proxies","وكلاء"),ds=e("enabled","تمكين"),us=e("setAsDefault","تعيين كافتراضي"),ps=e("deleteProxyMsg","هل أنت متأكد من حذف هذا الوكيل لجميع الشاشات؟"),ms=e("proxyDescription","يجب تعيين الوكلاء إلى شاشة للعمل."),gs=e("enableProxyDescription","لن يؤثر هذا الوكيل على طلبات الشاشة حتى يتم تنشيطه. يمكنك التحكم مؤقتًا في تعطيل الوكيل من جميع الشاشات حسب حالة التنشيط."),hs=e("setAsDefaultProxyDescription","سيتم تمكين هذا الوكيل افتراضيًا للشاشات الجديدة. لا يزال بإمكانك تعطيل الوكيل بشكل منفصل لكل شاشة."),ys=e("Valid","صالح"),Ss=e("Invalid","غير صالح"),Ds=e("AccessKeyId","معرف AccessKey"),Ts=e("SecretAccessKey","Accesskey Secret"),ks=e("PhoneNumbers","أرقام الهواتف"),Ps=e("TemplateCode","TemplateCode"),bs=e("SignName","اسم تسجيل الدخول"),As=e("WebHookUrl","webhookurl"),Ms=e("SecretKey","Secretkey"),ws=e("Platform","منصة"),vs=e("Huawei","هواوي"),fs=e("High","عالٍ"),Cs=e("Retry","إعادة المحاولة"),Rs=e("Topic","عنوان"),Is=e("User","المستعمل"),Ls=e("Installed","المثبتة"),Ns=e("Running","جري"),Us=e("Start","بداية"),Es=e("Stop","قف"),Hs=e("Slug","سبيكة"),xs=e("startOrEndWithOnly","ابدأ أو ينتهي بـ {0} فقط"),Fs=e("Next","التالي"),Gs=e("Authentication","المصادقة"),Os=e("Backup","دعم"),Ks=e("About","عن"),Ws=e("wayToGetCloudflaredURL","(قم بتنزيل CloudFlared من {0})"),Bs=e("cloudflareWebsite","موقع CloudFlare"),Vs=e("Subject","موضوع"),js=e("Issuer","المصدر"),qs=e("Fingerprint","بصمة"),zs=e("HomeAssistant","مساعد المنزل"),Js=e("onebotHttpAddress","OneBot HTTP عنوان"),Qs=e("onebotMessageType","نوع رسالة OneBot"),Ys=e("onebotGroupMessage","مجموعة"),Xs=e("onebotPrivateMessage","خاص"),Zs=e("onebotUserOrGroupId","معرف المجموعة/المستخدم"),_s=e("onebotSafetyTips","للسلامة يجب ضبط الرمز المميز للوصول"),$s=e("signedInDisp","وقعت في {0}"),en=e("signedInDispDisabled","معاق المصادقة."),on=e("RadiusSecret","سر نصف القطر"),tn=e("RadiusSecretDescription","السر المشترك بين العميل والخادم"),an=e("RadiusCalledStationId","يسمى معرف المحطة"),sn=e("RadiusCalledStationIdDescription","معرف الجهاز المتصل"),nn=e("RadiusCallingStationId","معرف محطة الاتصال"),rn=e("RadiusCallingStationIdDescription","معرف جهاز الاتصال"),cn=e("endpoint","نقطة النهاية"),ln=e("octopushAPIKey",'"API key" from HTTP API بيانات اعتماد في لوحة التحكم'),dn=e("octopushLogin",'"Login" من بيانات اعتماد API HTTP في لوحة التحكم'),un=e("promosmsLogin","اسم تسجيل الدخول API"),pn=e("promosmsPassword","كلمة مرور API"),mn=e("pushyAPIKey","مفتاح API السري"),gn=e("pushyToken","رمز الجهاز"),hn=e("wayToGetClickSendSMSToken","يمكنك الحصول على اسم مستخدم API ومفتاح API من {0}."),yn=e("Query","استفسار"),Sn=e("settingsCertificateExpiry","شهادة TLS انتهاء الصلاحية"),Dn=e("certificationExpiryDescription","شاشات HTTPS تضيء عندما تنتهي شهادة TLS في"),Tn=e("deleteDockerHostMsg","هل أنت متأكد من حذف مضيف Docker لجميع الشاشات؟"),kn=e("socket","قابس كهرباء"),Pn=e("tcp","TCP / HTTP"),bn=e("Domain","اِختِصاص"),An=e("Workstation","محطة العمل"),Mn=e("disableCloudflaredNoAuthMsg","أنت في وضع مصادقة لا توجد كلمة مرور غير مطلوبة."),wn=e("trustProxyDescription",'ثق في رؤوس "X-Forwarded- *". إذا كنت ترغب في الحصول على عنوان IP الصحيح للعميل وكان Web Pulse خلف وكيل مثل Nginx أو Apache ، فيجب عليك تمكين هذا.'),vn=e("wayToGetLineNotifyToken","يمكنك الحصول على رمز الوصول من {0}"),fn=e("Examples","أمثلة"),Cn=e("goAlertInfo","الهدف هو تطبيق مفتوح المصدر لجدولة الجدولة التلقائية والإشعارات (مثل الرسائل القصيرة أو المكالمات الصوتية). إشراك الشخص المناسب تلقائيًا بالطريقة الصحيحة وفي الوقت المناسب! {0}"),Rn=e("goAlertIntegrationKeyInfo",'احصل على مفتاح تكامل API العام للخدمة في هذا التنسيق "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" عادةً قيمة المعلمة الرمزية لعنوان url المنسق.'),In=e("goAlert","المرمى"),Ln=e("backupOutdatedWarning","مهمل: نظرًا لأنه تمت إضافة الكثير من الميزات وأن ميزة النسخ الاحتياطي هذه لم يتم الحفاظ عليها قليلاً ، فلا يمكنها إنشاء نسخة احتياطية كاملة أو استعادتها."),Nn=e("backupRecommend","يرجى النسخ الاحتياطي لحجم الصوت أو مجلد البيانات (./data/) مباشرة بدلاً من ذلك."),Un=e("Optional","اختياري"),En=e("squadcast","القاء فريقي"),Hn=e("SendKey","Sendkey"),xn=e("SMSManager","smsmanager"),Fn=e("or","أو"),Gn=e("recurringInterval","فترة"),On=e("Recurring","يتكرر"),Kn=e("strategyManual","نشط/غير نشط يدويًا"),Wn=e("warningTimezone","إنه يستخدم المنطقة الزمنية للخادم"),Bn=e("weekdayShortMon","الاثنين"),Vn=e("weekdayShortTue","الثلاثاء"),jn=e("weekdayShortWed","تزوج"),qn=e("weekdayShortThu","الخميس"),zn=e("weekdayShortFri","الجمعة"),Jn=e("weekdayShortSat","جلس"),Qn=e("weekdayShortSun","شمس"),Yn=e("dayOfWeek","يوم من الأسبوع"),Xn=e("dayOfMonth","يوم من الشهر"),Zn=e("lastDay","بالأمس"),_n=e("lastDay1","آخر يوم من الشهر"),$n=e("lastDay2","الثاني في اليوم الأخير من الشهر"),er=e("lastDay3","الثالث في اليوم الأخير من الشهر"),or=e("lastDay4","الرابع في اليوم الأخير من الشهر"),tr=e("pauseMaintenanceMsg","هل أنت متأكد من أن تتوقف مؤقتًا؟"),ar=e("statusPageMaintenanceEndDate","نهاية"),sr=e("IconUrl","url url icon"),nr=e("Enable","يُمكَِن"),rr=e("Disable","إبطال"),ir=e("dnsCacheDescription","قد لا يعمل في بعض بيئات IPv6 تعطيله إذا واجهت أي مشكلات."),cr=e("Strategy","إستراتيجية"),lr=e("Economy","اقتصاد"),dr=e("Lowcost","تكلفة منخفضة"),ur=e("high","عالي"),pr=e("dataRetentionTimeError","يجب أن تكون فترة الاستبقاء 0 أو أكبر"),mr=e("infiniteRetention","ضبط على 0 للاحتفاظ لا نهائي."),gr=e("confirmDeleteTagMsg","هل أنت متأكد من أنك تريد حذف هذه العلامة؟ لن يتم حذف الشاشات المرتبطة بهذه العلامة."),hr=e("Game","لعبة"),yr=e("Help","يساعد"),Sr=e("plugin","البرنامج المساعد | الإضافات"),Dr=e("install","ثَبَّتَ"),Tr=e("installing","التثبيت"),kr=e("uninstall","الغاء التثبيت"),Pr=e("uninstalling","إلغاء التثبيت"),br=e("loadingError","لا يمكن جلب البيانات ، يرجى المحاولة مرة أخرى في وقت لاحق."),Ar=e("markdownSupported","دعم صيغة Markdown"),Mr=e("confirmUninstallPlugin","هل أنت متأكد من أنك تريد إلغاء تثبيت هذا المكون الإضافي؟");e("default",{languageName:o,checkEverySecond:t,retryCheckEverySecond:a,resendEveryXTimes:s,resendDisabled:n,retriesDescription:r,ignoreTLSError:i,upsideDownModeDescription:c,maxRedirectDescription:l,enableGRPCTls:d,grpcMethodDescription:u,acceptedStatusCodesDescription:p,Maintenance:m,statusMaintenance:g,"Schedule maintenance":"جدولة الصيانة","Affected Monitors":"الشاشات المتأثرة","Pick Affected Monitors...":"اختر الشاشات المتأثرة …","Start of maintenance":"بداية الصيانة","All Status Pages":"جميع صفحات الحالة","Select status pages...":"حدد صفحات الحالة …",recurringIntervalMessage:h,affectedMonitorsDescription:y,affectedStatusPages:S,atLeastOneMonitor:D,passwordNotMatchMsg:T,notificationDescription:k,keywordDescription:P,pauseDashboardHome:b,deleteMonitorMsg:A,deleteMaintenanceMsg:M,deleteNotificationMsg:w,dnsPortDescription:v,resolverserverDescription:f,rrtypeDescription:C,pauseMonitorMsg:R,enableDefaultNotificationDescription:I,clearEventsMsg:L,clearHeartbeatsMsg:N,confirmClearStatisticsMsg:U,importHandleDescription:E,confirmImportMsg:H,twoFAVerifyLabel:x,tokenValidSettingsMsg:F,confirmEnableTwoFAMsg:G,confirmDisableTwoFAMsg:O,Settings:K,Dashboard:W,"New Update":"تحديث جديد",Language:B,Appearance:V,Theme:j,General:q,"Primary Base URL":"عنوان URL الأساسي",Version:z,"Check Update On GitHub":"تحقق من التحديث على GitHub",List:J,Add:Q,"Add New Monitor":"أضف شاشة جديدة","Quick Stats":"إحصائيات سريعة",Up:Y,Down:X,Pending:Z,Unknown:_,Pause:$,Name:ee,Status:oe,DateTime:te,Message:ae,"No important events":"لا توجد أحداث مهمة",Resume:se,Edit:ne,Delete:re,Current:ie,Uptime:ce,"Cert Exp.":"تصدير الشهادة",Monitor:le,day:de,"-day":"-يوم",hour:ue,"-hour":"-ساعة",Response:pe,Ping:me,"Monitor Type":"نوع المراقب",Keyword:ge,"Friendly Name":"اسم معروف",URL:he,Hostname:ye,Port:Se,"Heartbeat Interval":"فاصل نبضات القلب",Retries:De,"Heartbeat Retry Interval":"الفاصل الزمني لإعادة محاكمة نبضات القلب","Resend Notification if Down X times consecutively":"إعادة تقديم الإخطار إذا انخفض x مرات بالتالي",Advanced:Te,"Upside Down Mode":"وضع أسفل أسفل","Max. Redirects":"الأعلى. إعادة التوجيه","Accepted Status Codes":"رموز الحالة المقبولة","Push URL":"دفع عنوان URL",needPushEvery:ke,pushOptionalParams:Pe,Save:be,Notifications:Ae,"Not available, please setup.":"غير متوفر من فضلك الإعداد.","Setup Notification":"إشعار الإعداد",Light:Me,Dark:we,Auto:ve,"Theme - Heartbeat Bar":"موضوع - بار نبضات",Normal:fe,Bottom:Ce,None:Re,Timezone:Ie,"Search Engine Visibility":"محرك بحث الرؤية","Allow indexing":"السماح الفهرسة","Discourage search engines from indexing site":"تثبيط محركات البحث من موقع الفهرسة","Change Password":"غير كلمة السر","Current Password":"كلمة المرور الحالي","New Password":"كلمة سر جديدة","Repeat New Password":"كرر كلمة المرور الجديدة","Update Password":"تطوير كلمة السر","Disable Auth":"تعطيل المصادقة","Enable Auth":"تمكين المصادقة","disableauth.message1":"هل أنت متأكد من أن <strong> تعطيل المصادقة </strong>؟","disableauth.message2":"تم تصميمه للسيناريوهات <strong> حيث تنوي تنفيذ مصادقة الطرف الثالث </strong> أمام كوما في وقت التشغيل مثل CloudFlare Access Authelia أو آليات المصادقة الأخرى.","Please use this option carefully!":"الرجاء استخدام هذا الخيار بعناية!",Logout:Le,Leave:Ne,"I understand, please disable":"أنا أفهم من فضلك تعطيل",Confirm:Ue,Yes:Ee,No:He,Username:xe,Password:Fe,"Remember me":"تذكرنى",Login:Ge,"No Monitors, please":"لا شاشات من فضلك","add one":"أضف واحدا","Notification Type":"نوع إعلام",Email:Oe,Test:Ke,"Certificate Info":"معلومات الشهادة","Resolver Server":"خادم Resolver","Resource Record Type":"نوع سجل الموارد","Last Result":"اخر نتيجة","Create your admin account":"إنشاء حساب المسؤول الخاص بك","Repeat Password":"اعد كلمة السر","Import Backup":"استيراد النسخ الاحتياطي","Export Backup":"النسخ الاحتياطي تصدير",Export:We,Import:Be,respTime:Ve,notAvailableShort:je,"Default enabled":"التمكين الافتراضي","Apply on all existing monitors":"تنطبق على جميع الشاشات الحالية",Create:qe,"Clear Data":"امسح البيانات",Events:ze,Heartbeats:Je,"Auto Get":"الحصول على السيارات",backupDescription:Qe,backupDescription2:Ye,backupDescription3:Xe,alertNoFile:Ze,alertWrongFileType:_e,"Clear all statistics":"مسح جميع الإحصاءات","Skip existing":"تخطي الموجود",Overwrite:$e,Options:eo,"Keep both":"احتفظ بكليهما","Verify Token":"تحقق من الرمز المميز","Setup 2FA":"الإعداد 2FA","Enable 2FA":"تمكين 2FA","Disable 2FA":"تعطيل 2FA","2FA Settings":"2FA إعدادات","Two Factor Authentication":"توثيق ذو عاملين",Active:oo,Inactive:to,Token:ao,"Show URI":"أظهر URI",Tags:so,"Add New below or Select...":"إضافة جديد أدناه أو تحديد …","Tag with this name already exist.":"علامة مع هذا الاسم موجود بالفعل.","Tag with this value already exist.":"علامة مع هذه القيمة موجودة بالفعل.",color:no,"value (optional)":"القيمة (اختياري)",Gray:ro,Red:io,Orange:co,Green:lo,Blue:uo,Indigo:po,Purple:mo,Pink:go,Custom:ho,"Search...":"يبحث…","Avg. Ping":"متوسط. بينغ","Avg. Response":"متوسط. إجابة","Entry Page":"صفحة الدخول",statusPageNothing:yo,"No Services":"لا توجد خدمات","All Systems Operational":"جميع الأنظمة التشغيلية","Partially Degraded Service":"الخدمة المتدهورة جزئيا","Degraded Service":"خدمة متدهورة","Add Group":"أضف مجموعة","Add a monitor":"إضافة شاشة","Edit Status Page":"تحرير صفحة الحالة","Go to Dashboard":"الذهاب إلى لوحة القيادة","Status Page":"صفحة الحالة","Status Pages":"صفحات الحالة",defaultNotificationName:So,here:Do,Required:To,telegram:ko,ZohoCliq:Po,"Bot Token":"رمز الروبوت",wayToGetTelegramToken:bo,"Chat ID":"معرف الدردشة",telegramMessageThreadID:Ao,supportTelegramChatID:Mo,wayToGetTelegramChatID:wo,"YOUR BOT TOKEN HERE":"رمز الروبوت الخاص بك هنا",chatIDNotFound:vo,webhook:fo,"Post URL":"بعد عنوان URL","Content Type":"نوع المحتوى",webhookJsonDesc:Co,webhookFormDataDesc:Ro,webhookAdditionalHeadersTitle:Io,webhookAdditionalHeadersDesc:Lo,smtp:No,secureOptionNone:Uo,secureOptionTLS:Eo,"Ignore TLS Error":"تجاهل خطأ TLS","From Email":"من البريد الإلكترونى",emailCustomSubject:Ho,"To Email":"للبريد الإلكتروني",smtpCC:xo,smtpBCC:Fo,discord:Go,"Discord Webhook URL":"Discord Webhook URL",wayToGetDiscordURL:Oo,"Bot Display Name":"اسم عرض الروبوت","Prefix Custom Message":"بادئة رسالة مخصصة","Hello @everyone is...":"مرحبًا {'@'} الجميع…",teams:Ko,"Webhook URL":"Webhook URL",wayToGetTeamsURL:Wo,wayToGetZohoCliqURL:Bo,signal:Vo,Number:"رقم",Recipients:jo,needSignalAPI:qo,wayToCheckSignalURL:zo,signalImportant:Jo,gotify:Qo,"Application Token":"رمز التطبيق","Server URL":"عنوان URL الخادم",Priority:Yo,slack:Xo,"Icon Emoji":"أيقونة الرموز التعبيرية","Channel Name":"اسم القناة","Web Pulse URL":"Web Pulse URL",aboutWebhooks:Zo,aboutChannelName:_o,aboutKumaURL:$o,emojiCheatSheet:et,"rocket.chat":"صاروخ",pushover:ot,pushy:tt,PushByTechulus:at,octopush:st,promosms:nt,clicksendsms:rt,lunasea:it,apprise:ct,GoogleChat:lt,pushbullet:dt,Kook:ut,wayToGetKookBotToken:pt,wayToGetKookGuildID:mt,"Guild ID":"معرف النقابة",line:gt,mattermost:ht,"User Key":"مفتاح المستخدم",Device:yt,"Message Title":"عنوان الرسالة","Notification Sound":"صوت الإشعار","More info on":"مزيد من المعلومات حول",pushoverDesc1:St,pushoverDesc2:Dt,"SMS Type":"نوع الرسائل القصيرة",octopushTypePremium:Tt,octopushTypeLowCost:kt,checkPrice:Pt,apiCredentials:bt,octopushLegacyHint:At,"Check octopush prices":"تحقق من أسعار Octopush {0}.",octopushPhoneNumber:Mt,octopushSMSSender:wt,"LunaSea Device ID":"معرف جهاز Lunasea","Apprise URL":"إبلاغ عنوان URL",Example:vt,"Read more:":"{0} :قراءة المزيد","Status:":"{0} :حالة","Read more":"قراءة المزيد",appriseInstalled:ft,appriseNotInstalled:Ct,"Access Token":"رمز وصول","Channel access token":"قناة الوصول إلى الرمز","Line Developers Console":"تحكم المطورين",lineDevConsoleTo:Rt,"Basic Settings":"الإعدادات الأساسية","User ID":"معرف المستخدم","Messaging API":"واجهة برمجة تطبيقات المراسلة",wayToGetLineChannelToken:It,"Icon URL":"url url icon",aboutIconURL:Lt,aboutMattermostChannelName:Nt,matrix:Ut,promosmsTypeEco:Et,promosmsTypeFlash:Ht,promosmsTypeFull:xt,promosmsTypeSpeed:Ft,promosmsPhoneNumber:Gt,promosmsSMSSender:Ot,promosmsAllowLongSMS:Kt,"Feishu WebHookUrl":"Feishu Webhookurl",matrixHomeserverURL:Wt,"Internal Room Id":"معرف الغرفة الداخلية",matrixDesc1:Bt,matrixDesc2:Vt,Method:jt,Body:qt,Headers:zt,PushUrl:Jt,HeadersInvalidFormat:Qt,BodyInvalidFormat:Yt,"Monitor History":"مراقبة التاريخ",clearDataOlderThan:Xt,PasswordsDoNotMatch:Zt,records:_t,"One record":"سجل واحد",steamApiKeyDescription:$t,"Current User":"المستخدم الحالي",topic:ea,topicExplanation:oa,successMessage:ta,successMessageExplanation:aa,recent:sa,Done:na,Info:ra,Security:ia,"Steam API Key":"مفتاح API Steam","Shrink Database":"تقلص قاعدة البيانات","Pick a RR-Type...":"اختر نوع RR …","Pick Accepted Status Codes...":"اختر أكواد الحالة المقبولة …",Default:ca,"HTTP Options":"خيارات HTTP","Create Incident":"إنشاء حادث",Title:la,Content:da,Style:ua,info:pa,warning:ma,danger:ga,error:ha,critical:ya,primary:Sa,light:Da,dark:Ta,Post:ka,"Please input title and content":"الرجاء إدخال العنوان والمحتوى",Created:Pa,"Last Updated":"التحديث الاخير",Unpin:ba,"Switch to Light Theme":"التبديل إلى موضوع الضوء","Switch to Dark Theme":"التبديل إلى موضوع الظلام","Show Tags":"أضهر العلامات","Hide Tags":"إخفاء العلامات",Description:Aa,"No monitors available.":"لا شاشات المتاحة.","Add one":"أضف واحدا","No Monitors":"لا شاشات","Untitled Group":"مجموعة بلا عنوان",Services:Ma,Discard:wa,Cancel:va,"Powered by":"مشغل بواسطة",shrinkDatabaseDescription:fa,serwersms:Ca,serwersmsAPIUser:Ra,serwersmsAPIPassword:Ia,serwersmsPhoneNumber:La,serwersmsSenderName:Na,smseagle:Ua,smseagleTo:Ea,smseagleGroup:Ha,smseagleContact:xa,smseagleRecipientType:Fa,smseagleRecipient:Ga,smseagleToken:Oa,smseagleUrl:Ka,smseagleEncoding:Wa,smseaglePriority:Ba,stackfield:Va,Customize:ja,"Custom Footer":"تذييل مخصص","Custom CSS":"لغة تنسيق ويب حسب الطلب",smtpDkimSettings:qa,smtpDkimDesc:za,documentation:Ja,smtpDkimDomain:Qa,smtpDkimKeySelector:Ya,smtpDkimPrivateKey:Xa,smtpDkimHashAlgo:Za,smtpDkimheaderFieldNames:_a,smtpDkimskipFields:$a,wayToGetPagerDutyKey:es,"Integration Key":"مفتاح التكامل","Integration URL":"URL تكامل","Auto resolve or acknowledged":"حل السيارات أو الاعتراف به","do nothing":"لا تفعل شيئا","auto acknowledged":"اعترف السيارات","auto resolve":"عزم السيارات",gorush:os,alerta:ts,alertaApiEndpoint:as,alertaEnvironment:ss,alertaApiKey:ns,alertaAlertState:rs,alertaRecoverState:is,deleteStatusPageMsg:cs,Proxies:ls,default:"تقصير",enabled:ds,setAsDefault:us,deleteProxyMsg:ps,proxyDescription:ms,enableProxyDescription:gs,setAsDefaultProxyDescription:hs,"Certificate Chain":"سلسلة الشهادة",Valid:ys,Invalid:Ss,AccessKeyId:Ds,SecretAccessKey:Ts,PhoneNumbers:ks,TemplateCode:Ps,SignName:bs,"Sms template must contain parameters: ":"يجب أن يحتوي قالب الرسائل القصيرة على معلمات:","Bark Endpoint":"نقطة نهاية اللحاء","Bark Group":"مجموعة اللحاء","Bark Sound":"صوت اللحاء",WebHookUrl:As,SecretKey:Ms,"For safety, must use secret key":"للسلامة يجب استخدام المفتاح السري","Device Token":"رمز الجهاز",Platform:ws,Huawei:vs,High:fs,Retry:Cs,Topic:Rs,"WeCom Bot Key":"WECOM BOT KEY","Setup Proxy":"وكيل الإعداد","Proxy Protocol":"بروتوكول الوكيل","Proxy Server":"مخدم بروكسي","Proxy server has authentication":"خادم الوكيل لديه مصادقة",User:Is,Installed:Ls,"Not installed":"غير مثبت",Running:Ns,"Not running":"لا يعمل","Remove Token":"إزالة الرمز المميز",Start:Us,Stop:Es,"Web Pulse":"وقت التشغيل كوما","Add New Status Page":"أضف صفحة حالة جديدة",Slug:Hs,"Accept characters":"قبول الشخصيات",startOrEndWithOnly:xs,"No consecutive dashes":"لا شرطات متتالية",Next:Fs,"The slug is already taken. Please choose another slug.":"تم أخذ سبيكة بالفعل. الرجاء اختيار سبيكة أخرى.","No Proxy":"لا الوكيل",Authentication:Gs,"HTTP Basic Auth":"HTTP الأساسي Auth","New Status Page":"صفحة حالة جديدة","Page Not Found":"الصفحة غير موجودة","Reverse Proxy":"وكيل عكسي",Backup:Os,About:Ks,wayToGetCloudflaredURL:Ws,cloudflareWebsite:Bs,"Message:":":رسالة","Don't know how to get the token? Please read the guide":"لا أعرف كيف تحصل على الرمز المميز؟ يرجى قراءة الدليل","The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.":"قد يضيع الاتصال الحالي إذا كنت تتصل حاليًا عبر نفق CloudFlare. هل أنت متأكد تريد إيقافها؟ اكتب كلمة المرور الحالية لتأكيدها.","HTTP Headers":"رؤوس HTTP","Trust Proxy":"الوكيل الثقة","Other Software":"برامج أخرى","For example: nginx, Apache and Traefik.":"على سبيل المثال: nginx و Apache و Traefik.","Please read":"يرجى القراءة",Subject:Vs,"Valid To":"صالحة ل","Days Remaining":"الأيام المتبقية",Issuer:js,Fingerprint:qs,"No status pages":"لا صفحات الحالة","Domain Name Expiry Notification":"اسم النطاق إشعار انتهاء الصلاحية",Proxy:"الوكيل","Date Created":"تاريخ الإنشاء",HomeAssistant:zs,onebotHttpAddress:Js,onebotMessageType:Qs,onebotGroupMessage:Ys,onebotPrivateMessage:Xs,onebotUserOrGroupId:Zs,onebotSafetyTips:_s,"PushDeer Key":"مفتاح PushDeer","Footer Text":"نص تذييل","Show Powered By":"عرض مدعوم من قبل","Domain Names":"أسماء المجال",signedInDisp:$s,signedInDispDisabled:en,RadiusSecret:on,RadiusSecretDescription:tn,RadiusCalledStationId:an,RadiusCalledStationIdDescription:sn,RadiusCallingStationId:nn,RadiusCallingStationIdDescription:rn,"Certificate Expiry Notification":"إشعار انتهاء الصلاحية","API Username":"اسم المستخدم API","API Key":"مفتاح API","Recipient Number":"رقم المستلم","From Name/Number":"من الاسم/الرقم","Leave blank to use a shared sender number.":"اترك فارغًا لاستخدام رقم المرسل المشترك.","Octopush API Version":"إصدار Octopush API","Legacy Octopush-DM":"Legacy Octopush-DM",endpoint:cn,octopushAPIKey:ln,octopushLogin:dn,promosmsLogin:un,promosmsPassword:pn,"pushoversounds pushover":"سداد (افتراضي)","pushoversounds bike":"دراجة هوائية","pushoversounds bugle":"بوق","pushoversounds cashregister":"ماكينة تسجيل المدفوعات النقدية","pushoversounds classical":"كلاسيكي","pushoversounds cosmic":"كونية","pushoversounds falling":"هبوط","pushoversounds gamelan":"Gamelan","pushoversounds incoming":"واردة","pushoversounds intermission":"استراحة","pushoversounds magic":"سحر","pushoversounds mechanical":"ميكانيكي","pushoversounds pianobar":"شريط البيانو","pushoversounds siren":"صفارة إنذار","pushoversounds spacealarm":"إنذار الفضاء","pushoversounds tugboat":"قارب السحب","pushoversounds alien":"إنذار أجنبي (طويل)","pushoversounds climb":"تسلق (طويل)","pushoversounds persistent":"مستمر (طويل)","pushoversounds echo":"صدى مهووس (طويل)","pushoversounds updown":"صعودا (طويلة)","pushoversounds vibrate":"يهتز فقط","pushoversounds none":"لا شيء (صامت)",pushyAPIKey:mn,pushyToken:gn,"Show update if available":"عرض التحديث إذا كان ذلك متاحًا","Also check beta release":"تحقق أيضًا من الإصدار التجريبي","Using a Reverse Proxy?":"باستخدام وكيل عكسي؟","Check how to config it for WebSocket":"تحقق من كيفية تكوينه لـ WebSocket","Steam Game Server":"خادم لعبة البخار","Most likely causes":"الأسباب المرجحة","The resource is no longer available.":"لم يعد المورد متاحًا.","There might be a typing error in the address.":"قد يكون هناك خطأ مطبعي في العنوان.","What you can try":"ماذا تستطيع أن تجرب","Retype the address.":"اعد كتابة العنوان.","Go back to the previous page.":"عد للصفحة السابقة.","Coming Soon":"قريبا",wayToGetClickSendSMSToken:hn,"Connection String":"سلسلة الاتصال",Query:yn,settingsCertificateExpiry:Sn,certificationExpiryDescription:Dn,"Setup Docker Host":"إعداد مضيف Docker","Connection Type":"نوع الاتصال","Docker Daemon":"Docker Daemon",deleteDockerHostMsg:Tn,socket:kn,tcp:Pn,"Docker Container":"حاوية Docker","Container Name / ID":"اسم الحاوية / معرف","Docker Host":"مضيف Docker","Docker Hosts":"مضيفي Docker","ntfy Topic":"موضوع ntfy",Domain:bn,Workstation:An,disableCloudflaredNoAuthMsg:Mn,trustProxyDescription:wn,wayToGetLineNotifyToken:vn,Examples:fn,"Home Assistant URL":"Home Assistant URL","Long-Lived Access Token":"الرمز المميز للوصول منذ فترة طويلة","Long-Lived Access Token can be created by clicking on your profile name (bottom left) and scrolling to the bottom then click Create Token. ":"يمكن إنشاء رمز الوصول منذ فترة طويلة عن طريق النقر على اسم ملف التعريف الخاص بك (أسفل اليسار) والتمرير إلى الأسفل ثم انقر فوق إنشاء الرمز المميز.","Notification Service":"خدمة الإخطار","default: notify all devices":"الافتراضي: إخطار جميع الأجهزة",'A list of Notification Services can be found in Home Assistant under "Developer Tools > Services" search for "notification" to find your device/phone name.':'يمكن العثور على قائمة بخدمات الإخطار في المساعد المنزلي ضمن "Developer Tools > Services" ابحث عن "notification" للعثور على اسم جهازك/هاتفك.',"Automations can optionally be triggered in Home Assistant":"يمكن أن يتم تشغيل الأتمتة اختياريًا في مساعد المنزل","Trigger type":"نوع الزناد","Event type":"نوع الحدث","Event data":"بيانات الحدث","Then choose an action, for example switch the scene to where an RGB light is red.":"ثم اختر إجراءً على سبيل المثال قم بتبديل المشهد إلى حيث يكون ضوء RGB أحمر.","Frontend Version":"إصدار الواجهة الأمامية","Frontend Version do not match backend version!":"إصدار Frontend لا يتطابق مع الإصدار الخلفي!","Base URL":"عنوان URL الأساسي",goAlertInfo:Cn,goAlertIntegrationKeyInfo:Rn,goAlert:In,backupOutdatedWarning:Ln,backupRecommend:Nn,Optional:Un,squadcast:En,SendKey:Hn,"SMSManager API Docs":"مستندات SMSManager API","Gateway Type":"نوع البوابة",SMSManager:xn,"You can divide numbers with":"يمكنك تقسيم الأرقام مع",or:Fn,recurringInterval:Gn,Recurring:On,strategyManual:Kn,warningTimezone:Wn,weekdayShortMon:Bn,weekdayShortTue:Vn,weekdayShortWed:jn,weekdayShortThu:qn,weekdayShortFri:zn,weekdayShortSat:Jn,weekdayShortSun:Qn,dayOfWeek:Yn,dayOfMonth:Xn,lastDay:Zn,lastDay1:_n,lastDay2:$n,lastDay3:er,lastDay4:or,"No Maintenance":"لا صيانة",pauseMaintenanceMsg:tr,"maintenanceStatus-under-maintenance":"تحت الصيانة","maintenanceStatus-inactive":"غير نشط","maintenanceStatus-scheduled":"المقرر","maintenanceStatus-ended":"انتهى","maintenanceStatus-unknown":"مجهول","Display Timezone":"عرض المنطقة الزمنية","Server Timezone":"المنطقة الزمنية الخادم",statusPageMaintenanceEndDate:ar,IconUrl:sr,"Enable DNS Cache":"تمكين ذاكرة التخزين المؤقت DNS",Enable:nr,Disable:rr,dnsCacheDescription:ir,"Single Maintenance Window":"نافذة صيانة واحدة","Maintenance Time Window of a Day":"نافذة وقت الصيانة لليوم","Effective Date Range":"نطاق التاريخ السريع","Schedule Maintenance":"جدولة الصيانة","Date and Time":"التاريخ و الوقت","DateTime Range":"نطاق DateTime",Strategy:cr,"Free Mobile User Identifier":"معرف مستخدم الهاتف المحمول المجاني","Free Mobile API Key":"مفتاح واجهة برمجة تطبيقات مجانية للهاتف المحمول","Enable TLS":"تمكين TLS","Proto Service Name":"اسم خدمة البروتو","Proto Method":"طريقة البروتو","Proto Content":"محتوى proto",Economy:lr,Lowcost:dr,high:ur,"General Monitor Type":"نوع الشاشة العامة","Passive Monitor Type":"نوع الشاشة السلبي","Specific Monitor Type":"نوع شاشة محدد",dataRetentionTimeError:pr,infiniteRetention:mr,confirmDeleteTagMsg:gr,"Custom Monitor Type":"نوع الشاشة المخصص",Game:hr,"Don't know how to get the token? Please read the guide:":"لا أعرف كيفية الحصول على الرمز المميز؟ يرجى قراءة الدليل:","Subject:":"موضوع:","Valid To:":"صالحة ل:","Days Remaining:":"الأيام المتبقية:","Issuer:":"المُصدر:","Fingerprint:":"بصمة:","Most likely causes:":"الأسباب المرجحة:",Help:yr,"Accept characters:":"قبول الأحرف:",plugin:Sr,install:Dr,installing:Tr,uninstall:kr,uninstalling:Pr,loadingError:br,"Example:":"مثال: {0}","Google Analytics ID":"معرف Google Analytics",markdownSupported:Ar,"Edit Tag":"تحرير العلامة","Server Address":"عنوان المستقبل","Learn More":"يتعلم أكثر","Automations can optionally be triggered in Home Assistant:":"يمكن تشغيل الأتمتة اختياريًا في Home Assistant:","Trigger type:":"نوع الزناد:","Event type:":"نوع الحدث:","Event data:":"بيانات الحدث:","More info on:":"مزيد من المعلومات حول: {0}","What you can try:":"ماذا تستطيع أن تجرب:","Packet Size":"حجم الحزمة",confirmUninstallPlugin:Mr})}}}));