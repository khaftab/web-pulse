System.register([],(function(e,a){"use strict";return{execute:function(){var a=e("languageName","Português (Portugal)"),o=e("checkEverySecond","Verificar a cada {0} segundos"),t=e("retryCheckEverySecond","Tentar novamente a cada {0} segundos"),i=e("retriesDescription","Máximo de tentativas antes que o serviço seja marcado como inativo e uma notificação seja enviada"),r=e("ignoreTLSError","Ignorar erros TLS/SSL para sites HTTPS"),s=e("upsideDownModeDescription","Inverte o status de cabeça para baixo. Se o serviço estiver acessível, ele está OFFLINE."),n=e("maxRedirectDescription","Número máximo de redirecionamentos a seguir. Define como 0 para desativar redirecionamentos."),d=e("acceptedStatusCodesDescription","Seleciona os códigos de status que são considerados uma resposta bem-sucedida."),c=e("passwordNotMatchMsg","A senha repetida não corresponde."),u=e("notificationDescription","Atribuir uma notificação ao (s) monitor (es) para que funcione."),l=e("keywordDescription","Pesquisa a palavra-chave em HTML simples ou resposta JSON e diferencia maiúsculas de minúsculas"),m=e("pauseDashboardHome","Pausa"),p=e("deleteMonitorMsg","Tens a certeza de que queres excluir este monitor?"),g=e("deleteNotificationMsg","Tens a certeza de que queres excluir esta notificação para todos os monitores?"),v=e("resolverserverDescription","A Cloudflare é o servidor padrão, podes alterar o servidor 'resolvedor' a qualquer momento."),h=e("rrtypeDescription","Seleciona o RR-Type que queres monitorizar"),S=e("pauseMonitorMsg","Tens a certeza que queres fazer uma pausa?"),D=e("enableDefaultNotificationDescription","Para cada monitor novo esta notificação vai estar activa por padrão. Podes também desativar a notificação separadamente para cada monitor."),f=e("clearEventsMsg","Tens a certeza que queres excluir todos os eventos deste monitor?"),T=e("clearHeartbeatsMsg","Tens a certeza de que queres excluir todos os heartbeats deste monitor?"),y=e("confirmClearStatisticsMsg","Tens a certeza que queres excluir TODAS as estatísticas?"),P=e("importHandleDescription","Escolhe 'Ignorar existente' se quiseres ignorar todos os monitores ou notificações com o mesmo nome. 'Substituir' excluirá todos os monitores e notificações existentes."),A=e("confirmImportMsg","Tens a certeza que queres importar o backup? Certifica-te que selecionaste a opção de importação correta."),b=e("twoFAVerifyLabel","Insire o teu token para verificares se o 2FA está a funcionar"),k=e("tokenValidSettingsMsg","O token é válido! Agora podes salvar as configurações do 2FA."),C=e("confirmEnableTwoFAMsg","Tens a certeza de que queres habilitar 2FA?"),M=e("confirmDisableTwoFAMsg","Tens a certeza de que queres desativar 2FA?"),N=e("Settings","Configurações"),x=e("Dashboard","Dashboard"),w=e("Language","Linguagem"),R=e("Appearance","Aparência"),I=e("Theme","Tema"),E=e("General","Geral"),q=e("Version","Versão"),L=e("List","Lista"),O=e("Add","Adicionar"),U=e("Up","On"),H=e("Down","Off"),F=e("Pending","Pendente"),z=e("Unknown","Desconhecido"),G=e("Pause","Pausa"),B=e("Name","Nome"),V=e("Status","Status"),W=e("DateTime","Data hora"),j=e("Message","Mensagem"),K=e("Resume","Resumo"),J=e("Edit","Editar"),Q=e("Delete","Apagar"),X=e("Current","Atual"),Y=e("Uptime","Tempo de atividade"),Z=e("day","dia | dias"),_=e("hour","hora"),$=e("Response","Resposta"),ee=e("Ping","Ping"),ae=e("Keyword","Palavra-Chave"),oe=e("URL","URL"),te=e("Hostname","Hostname"),ie=e("Port","Porta"),re=e("Retries","Novas tentativas"),se=e("Advanced","Avançado"),ne=e("Save","Guardar"),de=e("Notifications","Notificações"),ce=e("Light","Claro"),ue=e("Dark","Escuro"),le=e("Auto","Auto"),me=e("Normal","Normal"),pe=e("Bottom","Inferior"),ge=e("None","Nenhum"),ve=e("Timezone","Fuso horário"),he=e("Logout","Logout"),Se=e("Leave","Sair"),De=e("Confirm","Confirmar"),fe=e("Yes","Sim"),Te=e("No","Não"),ye=e("Username","Utilizador"),Pe=e("Password","Senha"),Ae=e("Login","Autenticar"),be=e("Email","Email"),ke=e("Test","Testar"),Ce=e("Export","Exportar"),Me=e("Import","Importar"),Ne=e("respTime","Tempo de Resp. (ms)"),xe=e("notAvailableShort","N/A"),we=e("Create","Criar"),Re=e("Events","Eventos"),Ie=e("Heartbeats","Pings"),Ee=e("backupDescription","Podes fazer backup de todos os monitores e todas as notificações num arquivo JSON."),qe=e("backupDescription2","OBS: Os dados do histórico e do evento não estão incluídos."),Le=e("backupDescription3","Dados confidenciais, como tokens de notificação, estão incluídos no arquivo de exportação, mantem-no com cuidado."),Oe=e("alertNoFile","Seleciona um arquivo para importar."),Ue=e("alertWrongFileType","Seleciona um arquivo JSON."),He=e("Overwrite","Sobrescrever"),Fe=e("Options","Opções"),ze=e("Active","Ativo"),Ge=e("Inactive","Inativo"),Be=e("Token","Token"),Ve=e("Tags","Tag"),We=e("color","cor"),je=e("Gray","Cinza"),Ke=e("Red","Vermelho"),Je=e("Orange","Laranja"),Qe=e("Green","Verde"),Xe=e("Blue","Azul"),Ye=e("Indigo","Índigo"),Ze=e("Purple","Roxo"),_e=e("Pink","Rosa"),$e=e("statusPageNothing","Nada aqui, por favor, adiciona um grupo ou monitor."),ea=e("backupOutdatedWarning","Depreciado: Uma vez que muitas funcionalidades foram adicionadas e esta funcionalidade de backup é um pouco desmanchada, não pode gerar ou restaurar um backup completo."),aa=e("defaultNotificationName","Meu alerta de {notification} ({number})"),oa=e("here","aqui"),ta=e("Required","Obrigatório"),ia=e("webhookFormDataDesc","{multipart} é bom para PHP. O JSON precisará ser analisado com {decodeFunction}"),ra=e("webhookAdditionalHeadersTitle","Headers Adicionais"),sa=e("Priority","Prioridade"),na=e("emojiCheatSheet","Folha de dicas de emojis: {0}"),da=e("Method","Método"),ca=e("Body","Body"),ua=e("Headers","Headers"),la=e("PushUrl","Enviar URL"),ma=e("HeadersInvalidFormat","Os headers da solicitação não são JSON válidos: "),pa=e("BodyInvalidFormat","O body da solicitação não é um JSON válido: "),ga=e("clearDataOlderThan","Mantenha os dados do histórico do monitor por {0} dias."),va=e("PasswordsDoNotMatch","As passwords não coincidem."),ha=e("records","registros"),Sa=e("steamApiKeyDescription","Para monitorar um Steam Game Server, você precisa de uma chave Steam Web-API. Pode registrar a chave da API aqui: "),Da=e("topicExplanation","Tópico MQTT para monitorar"),fa=e("successMessage","Mensagem de Sucesso"),Ta=e("recent","Recente"),ya=e("Done","Feito"),Pa=e("Info","Informações"),Aa=e("Security","Segurança"),ba=e("Content","Conteúdo"),ka=e("Style","Estilo"),Ca=e("info","informações"),Ma=e("warning","aviso"),Na=e("danger","perigo"),xa=e("critical","crítico"),wa=e("primary","primário"),Ra=e("light","luz"),Ia=e("dark","escuro"),Ea=e("Post","Post"),qa=e("Created","Criado"),La=e("Unpin","Desmarcar"),Oa=e("appriseInstalled","Apprise está instalado."),Ua=e("appriseNotInstalled","Apprise não está instalado. {0}"),Ha=e("Services","Serviços"),Fa=e("Discard","Descartar"),za=e("Cancel","Cancelar"),Ga=e("Customize","Customizar"),Ba=e("deleteStatusPageMsg","Tem certeza de que deseja excluir esta página de status?"),Va=e("Proxies","Proxies"),Wa=e("enabled","Ativar"),ja=e("setAsDefault","Definir como Padrão"),Ka=e("deleteProxyMsg","Tem a certeza que quer excluir este proxy para todos os monitores?"),Ja=e("setAsDefaultProxyDescription","Este proxy será ativado por padrão para novos monitores. Você ainda pode desabilitar o proxy separadamente para cada monitor."),Qa=e("Valid","Válido"),Xa=e("Invalid","Inválido"),Ya=e("Running","Em Execução"),Za=e("Start","Iniciar"),_a=e("Stop","Parar"),$a=e("Next","Próximo"),eo=e("Slug","URL"),ao=e("startOrEndWithOnly","Iniciar ou terminar apenas com {0}"),oo=e("Authentication","Autenticação"),to=e("Backup","Backup"),io=e("About","Sobre"),ro=e("wayToGetCloudflaredURL","(Download cloudflared de {0})"),so=e("cloudflareWebsite","Site da Cloudflare"),no=e("signedInDisp","Conectado como {0}"),co=e("signedInDispDisabled","Autenticação Desativada."),uo=e("RadiusSecret","Radius Secret"),lo=e("RadiusSecretDescription","Secret compartilhado entre cliente e servidor"),mo=e("RadiusCallingStationIdDescription","Identificador do dispositivo de chamada"),po=e("Query","Query"),go=e("settingsCertificateExpiry","Validade do Certificado TLS"),vo=e("certificationExpiryDescription","Os monitores HTTPS ativam a notificação quando o certificado TLS expira:"),ho=e("deleteDockerHostMsg","Tem a certeza de querer apagar este docker host para todos os monitores?"),So=e("socket","Socket"),Do=e("tcp","TCP / HTTP"),fo=e("Domain","Domínio"),To=e("Workstation","Estação de trabalho"),yo=e("ZohoCliq","ZohoCliq"),Po=e("wayToGetTelegramToken","Pode obter o token a partir de {0}."),Ao=e("wayToGetTelegramChatID","Pode obter o seu ID de chat enviando uma mensagem para o bot e indo a este URL para ver o chat_id:"),bo=e("disableCloudflaredNoAuthMsg","Está no modo Sem Autenticação, não é necessária uma palavra-passe."),ko=e("Examples","Exemplos"),Co=e("wayToGetLineNotifyToken","Pode obter o código de acesso a partir de {0}"),Mo=e("backupRecommend","Por favor, faça o backup do volume ou da pasta de dados (./data/) diretamente."),No=e("Optional","Opcional"),xo=e("squadcast","Squadcast"),wo=e("recurringInterval","Intervalo"),Ro=e("Recurring","Recurrente"),Io=e("strategyManual","Ativar/Desativar Manualmente"),Eo=e("warningTimezone","Está a utilizar o fuso horário do servidor"),qo=e("weekdayShortMon","Segunda"),Lo=e("weekdayShortTue","Terça"),Oo=e("weekdayShortWed","Quarta"),Uo=e("weekdayShortThu","Quinta"),Ho=e("weekdayShortFri","Sexta"),Fo=e("weekdayShortSat","Sábado"),zo=e("weekdayShortSun","Domingo"),Go=e("dayOfWeek","Dia da Semana"),Bo=e("dayOfMonth","Dia do Mês"),Vo=e("lastDay","Último Dia"),Wo=e("lastDay2","2º Último Dia do Mês"),jo=e("lastDay3","3º Último Dia do Mês"),Ko=e("lastDay4","4º Último Dia do Mês"),Jo=e("statusPageMaintenanceEndDate","Acabou"),Qo=e("Maintenance","Manutenção"),Xo=e("resendEveryXTimes","Reenviar a cada {0} vezes"),Yo=e("resendDisabled","Reenviar desativado"),Zo=e("webhook","Webhook"),_o=e("topic","Tema"),$o=e("RadiusCalledStationIdDescription","Identificador do dispositivo chamado"),et=e("or","ou"),at=e("markdownSupported","Sintaxe de redução suportada"),ot=e("webhookJsonDesc","{0} é bom para qualquer servidor HTTP moderno, como Express.js"),tt=e("webhookAdditionalHeadersDesc","Define headers adicionais enviados com o webhook."),it=e("successMessageExplanation","Mensagem MQTT que será considerada como sucesso"),rt=e("error","erro"),st=e("Description","Descrição"),nt=e("shrinkDatabaseDescription","Acionar banco de dados VACUUM para SQLite. Se seu banco de dados for criado após 1.10.0, AUTO_VACUUM já está ativado e esta ação não é necessária."),dt=e("proxyDescription","Os proxies devem ser atribuídos a um monitor para funcionar."),ct=e("enableProxyDescription","Este proxy não afetará as solicitações do monitor até que seja ativado. Você pode controlar temporariamente a desativação do proxy de todos os monitores pelo status de ativação."),ut=e("supportTelegramChatID","Chat de Apoio Direto / Grupo / ID do Chat do Canal"),lt=e("chatIDNotFound","O ID do Chat não é encontrado; por favor envie uma mensagem a este bot primeiro"),mt=e("trustProxyDescription","Confiar nos headers 'X-Forwarded-*'. Se quiser obter o IP correto do cliente e o seu Uptime Kuma está por detrás de um proxy como o Nginx ou Apache, deve activá-lo."),pt=e("lastDay1","Último Dia do Mês"),gt=e("pauseMaintenanceMsg","Quer mesmo colocar em pausa?"),vt=e("needPushEvery","Deve chamar este URL a cada {0} segundos."),ht=e("pushOptionalParams","Parâmetros opcionais: {0}"),St=e("Title","Título"),Dt=e("User","Utilizador"),ft=e("Installed","Instalado"),Tt=e("RadiusCalledStationId","Id da estação chamada"),yt=e("RadiusCallingStationId","Id da estação de chamada"),Pt=e("telegram","Telegram"),At=e("Help","Ajuda"),bt=e("Game","Jogo"),kt=e("Monitor","Monitor | Monitores"),Ct=e("Default","Padrão"),Mt=e("statusMaintenance","Manutenção"),Nt=e("Custom","Personalizar");e("default",{languageName:a,checkEverySecond:o,retryCheckEverySecond:t,retriesDescription:i,ignoreTLSError:r,upsideDownModeDescription:s,maxRedirectDescription:n,acceptedStatusCodesDescription:d,passwordNotMatchMsg:c,notificationDescription:u,keywordDescription:l,pauseDashboardHome:m,deleteMonitorMsg:p,deleteNotificationMsg:g,resolverserverDescription:v,rrtypeDescription:h,pauseMonitorMsg:S,enableDefaultNotificationDescription:D,clearEventsMsg:f,clearHeartbeatsMsg:T,confirmClearStatisticsMsg:y,importHandleDescription:P,confirmImportMsg:A,twoFAVerifyLabel:b,tokenValidSettingsMsg:k,confirmEnableTwoFAMsg:C,confirmDisableTwoFAMsg:M,Settings:N,Dashboard:x,"New Update":"Nova Atualização",Language:w,Appearance:R,Theme:I,General:E,Version:q,"Check Update On GitHub":"Verificar atualização no Github",List:L,Add:O,"Add New Monitor":"Adicionar novo monitor","Quick Stats":"Estatísticas rápidas",Up:U,Down:H,Pending:F,Unknown:z,Pause:G,Name:B,Status:V,DateTime:W,Message:j,"No important events":"Nenhum evento importante",Resume:K,Edit:J,Delete:Q,Current:X,Uptime:Y,"Cert Exp.":"Cert Exp.",day:Z,"-day":"-dia",hour:_,"-hour":"-hora",Response:$,Ping:ee,"Monitor Type":"Tipo de Monitor",Keyword:ae,"Friendly Name":"Nome Amigável",URL:oe,Hostname:te,Port:ie,"Heartbeat Interval":"Intervalo de Heartbeats",Retries:re,"Heartbeat Retry Interval":"Intervalo de repetição de Heartbeats",Advanced:se,"Upside Down Mode":"Modo de cabeça para baixo","Max. Redirects":"Max. Redirecionamentos","Accepted Status Codes":"Status Code Aceitáveis",Save:ne,Notifications:de,"Not available, please setup.":"Não disponível, por favor configura.","Setup Notification":"Configurar Notificação",Light:ce,Dark:ue,Auto:le,"Theme - Heartbeat Bar":"Tema - Barra de Heartbeat",Normal:me,Bottom:pe,None:ge,Timezone:ve,"Search Engine Visibility":"Visibilidade do mecanismo de pesquisa","Allow indexing":"Permitir Indexação","Discourage search engines from indexing site":"Desencorajar que motores de busca indexem o site","Change Password":"Mudar senha","Current Password":"Senha atual","New Password":"Nova Senha","Repeat New Password":"Repetir Nova Senha","Update Password":"Atualizar Senha","Disable Auth":"Desativar Autenticação","Enable Auth":"Ativar Autenticação","disableauth.message1":"Tens a certeza que queres <strong>desativar a autenticação</strong>?","disableauth.message2":"Isso é para <strong>alguém que tem autenticação de terceiros</strong> em frente ao 'UpTime Kuma' como o Cloudflare Access.","Please use this option carefully!":"Por favor, utiliza esta opção com cuidado.",Logout:he,Leave:Se,"I understand, please disable":"Eu entendo, por favor desativa.",Confirm:De,Yes:fe,No:Te,Username:ye,Password:Pe,"Remember me":"Lembra-me",Login:Ae,"No Monitors, please":"Nenhum monitor, por favor","add one":"adicionar um","Notification Type":"Tipo de Notificação",Email:be,Test:ke,"Certificate Info":"Info. do Certificado","Resolver Server":"Resolver Servidor","Resource Record Type":"Tipo de registro de aplicação","Last Result":"Último resultado","Create your admin account":"Cria a tua conta de admin","Repeat Password":"Repete a senha","Import Backup":"Importar Backup","Export Backup":"Exportar Backup",Export:Ce,Import:Me,respTime:Ne,notAvailableShort:xe,"Default enabled":"Padrão habilitado","Apply on all existing monitors":"Aplicar em todos os monitores existentes",Create:we,"Clear Data":"Limpar Dados",Events:Re,Heartbeats:Ie,"Auto Get":"Obter Automático",backupDescription:Ee,backupDescription2:qe,backupDescription3:Le,alertNoFile:Oe,alertWrongFileType:Ue,"Clear all statistics":"Limpar todas as estatísticas","Skip existing":"Saltar existente",Overwrite:He,Options:Fe,"Keep both":"Manter os dois","Verify Token":"Verificar Token","Setup 2FA":"Configurar 2FA","Enable 2FA":"Ativar 2FA","Disable 2FA":"Desativar 2FA","2FA Settings":"Configurações do 2FA","Two Factor Authentication":"Autenticação de Dois Fatores",Active:ze,Inactive:Ge,Token:Be,"Show URI":"Mostrar URI",Tags:Ve,"Add New below or Select...":"Adicionar Novo abaixo ou Selecionar…","Tag with this name already exist.":"Já existe uma etiqueta com este nome.","Tag with this value already exist.":"Já existe uma etiqueta com este valor.",color:We,"value (optional)":"valor (opcional)",Gray:je,Red:Ke,Orange:Je,Green:Qe,Blue:Xe,Indigo:Ye,Purple:Ze,Pink:_e,"Search...":"Pesquisa…","Avg. Ping":"Ping Médio","Avg. Response":"Resposta Média","Status Page":"Página de Status","Status Pages":"Página de Status","Entry Page":"Página de entrada",statusPageNothing:$e,"No Services":"Nenhum Serviço","All Systems Operational":"Todos os Serviços Operacionais","Partially Degraded Service":"Serviço parcialmente degradados","Degraded Service":"Serviço Degradado","Add Group":"Adicionar Grupo","Add a monitor":"Adicionar um monitor","Edit Status Page":"Editar Página de Status","Go to Dashboard":"Ir para o dashboard",backupOutdatedWarning:ea,"Schedule maintenance":"Agendar manutenção","Affected Monitors":"Monitores Afetados","Pick Affected Monitors...":"Escolher Monitores Afetados…","All Status Pages":"Todas as Páginas de Status","Select status pages...":"Selecionar Páginas de Status…",defaultNotificationName:aa,here:oa,Required:ta,"Post URL":"Post URL","Content Type":"Tipo de Conteúdo",webhookFormDataDesc:ia,webhookAdditionalHeadersTitle:ra,"Webhook URL":"URL do Webhook","Application Token":"Token do Aplicativo","Server URL":"URL do Servidor",Priority:sa,emojiCheatSheet:na,"Read more":"Ler Mais",Method:da,Body:ca,Headers:ua,PushUrl:la,HeadersInvalidFormat:ma,BodyInvalidFormat:pa,"Monitor History":"Histórico do Monitor",clearDataOlderThan:ga,PasswordsDoNotMatch:va,records:ha,"One record":"Um registro",steamApiKeyDescription:Sa,"Current User":"Usuário Atual",topicExplanation:Da,successMessage:fa,recent:Ta,Done:ya,Info:Pa,Security:Aa,"Steam API Key":"Steam API Key","Shrink Database":"Encolher Base de Dados","Pick a RR-Type...":"Escolha um tipo RR…","Pick Accepted Status Codes...":"Escolha Códigos de Status Aceitos…","HTTP Options":"Opções HTTP","Create Incident":"Criar Incidente",Content:ba,Style:ka,info:Ca,warning:Ma,danger:Na,critical:xa,primary:wa,light:Ra,dark:Ia,Post:Ea,Created:qa,"Last Updated":"Ultima Atualização",Unpin:La,"Switch to Light Theme":"Alterar para Tema Claro","Switch to Dark Theme":"Alterar para Tema Escuro","Show Tags":"Mostrar Tags",appriseInstalled:Oa,appriseNotInstalled:Ua,"No monitors available.":"Nenhum monitor disponível.","Add one":"Adicione um","No Monitors":"Sem Monitores","Untitled Group":"Grupo sem Título",Services:Ha,Discard:Fa,Cancel:za,"Powered by":"Powered by",Customize:Ga,"Custom CSS":"CSS Customizado","Custom Footer":"Footer Customizado",deleteStatusPageMsg:Ba,Proxies:Va,default:"Padrão",enabled:Wa,setAsDefault:ja,deleteProxyMsg:Ka,setAsDefaultProxyDescription:Ja,Valid:Qa,Invalid:Xa,"Remove Token":"Remover Token",Running:Ya,"Not running":"Não está em execução",Start:Za,Stop:_a,"Add New Status Page":"Adicionar Nova Página de Status",Next:$a,"No consecutive dashes":"Sem traços consecutivos",Slug:eo,"Accept characters:":"Caracteres aceites:",startOrEndWithOnly:ao,"The slug is already taken. Please choose another slug.":"URL já existe. Por favor escolha outro URL.","No Proxy":"Sem Proxy",Authentication:oo,"HTTP Basic Auth":"Autenticação Básica HTTP","New Status Page":"Nova Página de Status","Page Not Found":"Página Não Encontrada","Reverse Proxy":"Proxy Reverso",Backup:to,About:io,wayToGetCloudflaredURL:ro,cloudflareWebsite:so,"Message:":"Mensagem:","HTTP Headers":"Headers HTTP","Trust Proxy":"Proxy de Confiança","Other Software":"Outro Software","For example: nginx, Apache and Traefik.":"Por exemplo: nginx, Apache e Traefik.","Please read":"Por favor leia","Subject:":"Assunto:","Valid To:":"Valido para:","Days Remaining:":"Dias Restantes:","Issuer:":"Emissor:","Fingerprint:":"Impressão Digital:","No status pages":"Nenhuma página de status","Domain Name Expiry Notification":"Notificação de Expiração de Nome de Domínio",Proxy:"Proxy","Date Created":"Data da Criação","Footer Text":"Texto do Footer","Show Powered By":"Mostrar Powered By","Domain Names":"Nomes de Domínio",signedInDisp:no,signedInDispDisabled:co,RadiusSecret:uo,RadiusSecretDescription:lo,RadiusCallingStationIdDescription:mo,"Certificate Expiry Notification":"Notificação de Expiração do Certificado","API Username":"Nome de utilizador da API","API Key":"Chave API","Using a Reverse Proxy?":"Utilizando um Proxy Reverso?","Check how to config it for WebSocket":"Verifique como configurá-lo para WebSocket","Steam Game Server":"Steam Game Server","Most likely causes:":"Causas mais prováveis:","The resource is no longer available.":"O recurso já não está disponível.","There might be a typing error in the address.":"Pode haver um erro de digitação no endereço.","What you can try:":"O que pode tentar:","Retype the address.":"Volte a escrever o endereço.","Go back to the previous page.":"Voltar à página anterior.","Coming Soon":"Em Breve","Connection String":"Linha de Conexão",Query:po,settingsCertificateExpiry:go,certificationExpiryDescription:vo,"Setup Docker Host":"Configuração do Docker Host","Connection Type":"Tipo de conexão","Docker Daemon":"Docker Daemon",deleteDockerHostMsg:ho,socket:So,tcp:Do,"Docker Host":"Docker Host","Docker Hosts":"Docker Hosts",Domain:fo,Workstation:To,"Packet Size":"Tamanho do pacote",ZohoCliq:yo,"Bot Token":"Token do Bot",wayToGetTelegramToken:Po,"Chat ID":"ID do Chat",wayToGetTelegramChatID:Ao,"YOUR BOT TOKEN HERE":"O TOKEN DO BOT AQUI",disableCloudflaredNoAuthMsg:bo,Examples:ko,"Long-Lived Access Token":"Token de Acesso de Longa Duração",wayToGetLineNotifyToken:Co,"Notification Service":"Serviço de Notificação",'A list of Notification Services can be found in Home Assistant under "Developer Tools > Services" search for "notification" to find your device/phone name.':'Uma lista de Serviços de Notificação pode ser encontrada em Home Assistant em "Developer Tools > Services" pesquisa por "notificação" para encontrar o seu dispositivo/nome do telefone.',"Home Assistant URL":"URL do Home Assistant","Event type:":"Tipo de evento:","Event data:":"Dados do evento:","Then choose an action, for example switch the scene to where an RGB light is red.":"Depois de escolher uma ação, por exemplo mudar a cena para onde uma luz RGB é vermelha.","Frontend Version":"Versão Frontend","Frontend Version do not match backend version!":"Versão Frontend não corresponde à versão backend!",backupRecommend:Mo,Optional:No,squadcast:xo,recurringInterval:wo,Recurring:Ro,strategyManual:Io,warningTimezone:Eo,weekdayShortMon:qo,weekdayShortTue:Lo,weekdayShortWed:Oo,weekdayShortThu:Uo,weekdayShortFri:Ho,weekdayShortSat:Fo,weekdayShortSun:zo,dayOfWeek:Go,dayOfMonth:Bo,lastDay:Vo,lastDay2:Wo,lastDay3:jo,lastDay4:Ko,"No Maintenance":"Nenhuma Manutenção","maintenanceStatus-under-maintenance":"Em Manutenção","maintenanceStatus-inactive":"Inativo","maintenanceStatus-scheduled":"Agendado","maintenanceStatus-ended":"Terminado","Display Timezone":"Mostrar Fuso horário","Server Timezone":"Fuso horário do Servidor",statusPageMaintenanceEndDate:Jo,Maintenance:Qo,"Specific Monitor Type":"Tipo de Monitor Específico","Resend Notification if Down X times consequently":"Reenviar notificação se Off X vezes consequentemente",resendEveryXTimes:Xo,resendDisabled:Yo,"Push URL":"Enviar URL",webhook:Zo,topic:_o,RadiusCalledStationIdDescription:$o,"Automations can optionally be triggered in Home Assistant:":"As automatizações podem opcionalmente ser ativadas em Home Assistant:",or:et,markdownSupported:at,"Start of maintenance":"Início da manutenção",webhookJsonDesc:ot,webhookAdditionalHeadersDesc:tt,successMessageExplanation:it,error:rt,"Please input title and content":"Por favor insira o título e o conteúdo","Hide Tags":"Ocultar Tags",Description:st,shrinkDatabaseDescription:nt,proxyDescription:dt,enableProxyDescription:ct,"Don't know how to get the token? Please read the guide:":"Não sabe como obter o token? Por favor, leia o guia:","The current connection may be lost if you are currently connecting via Cloudflare Tunnel. Are you sure want to stop it? Type your current password to confirm it.":"A conexão atual pode ser perdida se estiver conectando via Cloudflare Tunnel. Tem certeza de que deseja pará-lo? Digite sua senha atual para confirmar.","Docker Container":"Contentor Docker","Container Name / ID":"Nome / ID do Contentor",supportTelegramChatID:ut,chatIDNotFound:lt,trustProxyDescription:mt,"Long-Lived Access Token can be created by clicking on your profile name (bottom left) and scrolling to the bottom then click Create Token. ":"O Token de Acesso de Longa Duração pode ser criado clicando no nome do seu perfil (em baixo à esquerda) e descendo para o fundo da pagina e depois clicando em Criar Token. ",lastDay1:pt,pauseMaintenanceMsg:gt,"maintenanceStatus-unknown":"Desconhecido",needPushEvery:vt,pushOptionalParams:ht,Title:St,User:Dt,Installed:ft,"Not installed":"Não instalado",RadiusCalledStationId:Tt,RadiusCallingStationId:yt,"default: notify all devices":"padrão: notificar todos os dispositivos","Trigger type:":"Tipo de gatilho:",telegram:Pt,Help:At,Game:bt,Monitor:kt,Default:Ct,"Certificate Chain":"Certificate Chain","Show update if available":"Mostrar atualização se disponível","Also check beta release":"Verifique também a versão beta","Primary Base URL":"URL Base Principal",statusMaintenance:Mt,"Passive Monitor Type":"Tipo de Monitor Passivo",Custom:Nt,"General Monitor Type":"Tipo de Monitor Geral"})}}}));