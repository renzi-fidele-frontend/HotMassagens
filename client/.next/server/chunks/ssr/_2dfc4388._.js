module.exports = {

"[project]/src/content/data.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "destaques": (()=>destaques),
    "faqs": (()=>faqs),
    "terapeutas": (()=>terapeutas)
});
const terapeutas = [
    {
        foto: "https://hotmassages.pt/wp-content/uploads/2024/09/sol-hot-3-673x1024.jpeg",
        endereco_curto: "Areeiro - Lisboa",
        id: "1223",
        nome: "Sol",
        bio: [
            ""
        ]
    }
];
const faqs = [
    {
        pergunta: "O que é a Hot Massages?",
        resposta: "A Hot Massages é uma plataforma online que oferece serviços de publicidade para terapeutas de massagem em Portugal. Nosso site conecta terapeutas qualificadas a clientes que buscam relaxamento e bem-estar, proporcionando uma interface simples e segura para encontrar, agendar e entrar em contato com as profissionais de sua escolha."
    },
    {
        pergunta: "Quais tipos de massagens oferecem?",
        resposta: "Os tipos de massagem variam de acordo com a terapeuta. Cada terapeuta pode listar os tipos de massagem que realiza, como massagens relaxantes, terapêuticas, tântricas, entre outras. Recomendamos que os clientes leiam as descrições dos anúncios para conhecer os serviços específicos de cada terapeuta antes de realizar um agendamento."
    },
    {
        pergunta: "Onde são realizados os atendimentos?",
        resposta: "Os locais de atendimento variam de acordo com cada terapeuta. Algumas terapeutas podem atender em seus próprios estúdios ou espaços de massagem, enquanto outras podem oferecer a opção de atendimento em hotéis ou residências dos clientes. As informações sobre locais de atendimento geralmente estão descritas no perfil de cada terapeuta, e os detalhes específicos podem ser discutidos diretamente com a terapeuta no momento da reserva."
    },
    {
        pergunta: "As terapeutas podem atender à domicílio?",
        resposta: "Sim, algumas terapeutas anunciadas na Hot Massages oferecem a opção de atendimento à domicílio. Essa informação estará indicada no perfil de cada terapeuta. Recomendamos que, ao entrar em contato, confirme diretamente com a terapeuta se o serviço de atendimento à domicílio está disponível, quais são as condições e se há alguma taxa adicional envolvida."
    },
    {
        pergunta: "Quais são as condições para reservar?",
        resposta: "Para realizar uma reserva com uma terapeuta anunciada na Hot Massages, é necessário seguir algumas condições básicas: Reserva Antecipada: Recomendamos que as reservas sejam feitas com antecedência para garantir a disponibilidade da terapeuta desejada."
    }
];
const destaques = [
    "Excelência no atendimento",
    "Terapeutas de Alta Classe",
    "Requinte",
    "Discrição",
    "Segurança"
];
}}),
"[project]/src/app/terapeutas/[terapeuta]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Terapeuta = async ()=>{
    const param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const [terapeuta, setTerapeuta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    function getTerapeuta(id) {
        setTerapeuta(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["terapeutas"].find((v)=>v.id === id));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        getTerapeuta(`${param.terapeuta}`);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Conteudo"
    }, void 0, false, {
        fileName: "[project]/src/app/terapeutas/[terapeuta]/page.tsx",
        lineNumber: 18,
        columnNumber: 11
    }, this);
};
const __TURBOPACK__default__export__ = Terapeuta;
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_2dfc4388._.js.map