// Docsify plugin functions
function plugin(hook, vm) {
    hook.afterEach(function (html, next) {
        // add html string
        next(
            html +
                `
            <hr>
            <footer class="beian" style="text-align: center;">
                <a style="text-decoration: none; color: #34495e; font-size: 15px; font-weight: 400;" href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">${
                    window.$docsify["beian"].ICP
                }</a>
                ${
                    window.$docsify["beian"].NISMSP &&
                    window.$docsify["beian"].NISMSP.number.length !== 0
                        ? `
                        &nbsp;&nbsp;
                    <a style="text-decoration: none; color: #34495e; font-size: 15px; font-weight: 400;" href="${
                        !window.$docsify["beian"].NISMSP.id
                            ? window.$docsify["beian"].NISMSP.url
                            : `http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${window.$docsify["beian"].NISMSP.id}`
                    }" target="_blank">
                        <img style="width: 15px; height: 15px;" src="http://www.beian.gov.cn/img/new/gongan.png" alt="全国互联网安全" />${
                            window.$docsify["beian"].NISMSP.number
                        }
                    </a>
                        `
                        : ""
                }

            </footer>
            `
        )
    })
}

// Docsify plugin options
window.$docsify["beian"] = Object.assign(
    {
        ICP: "",
        NISMSP: {
            number: "",
            url: "",
            id: "",
        },
    },
    window.$docsify["beian"]
)
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
