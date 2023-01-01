import{_ as a,W as i,X as l,Y as n,Z as e,$ as c,a1 as o,E as d}from"./framework-bcad4379.js";const t={},r=n("h4",{id:"环境要求",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境要求","aria-hidden":"true"},"#"),e(" 环境要求")],-1),u=n("ul",null,[n("li",null,"Node.js 16+")],-1),m=n("h4",{id:"环境准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境准备","aria-hidden":"true"},"#"),e(" 环境准备")],-1),p=n("strong",null,"安装 Node.js 环境（如已安装请跳过）:",-1),v={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"node -v",-1),_=n("li",null,[n("strong",null,"拉取代码:"),e(" 克隆本仓库代码")],-1),b=n("li",null,[n("strong",null,"安装依赖:"),e(" 在项目根目录打开命令行，执行命令："),n("code",null,"npm install"),e("，若此命令执行的过程中报错可以尝试百度报错内容找解决方法")],-1),k=o(`<div class="custom-container tip"><p class="custom-container-title">提示</p><p>若<code>npm install</code>执行错误，你可以尝试使用 <code>cnpm</code>，或者修改 npm 源为<code>淘宝源</code>。</p></div><h4 id="开发-构建" tabindex="-1"><a class="header-anchor" href="#开发-构建" aria-hidden="true">#</a> 开发&amp;构建</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开发模式</span>
<span class="token function">npm</span> run dev

<span class="token comment"># 构建免安装版</span>
<span class="token function">npm</span> run pack:dir

<span class="token comment"># 构建安装包（Windows版）</span>
<span class="token function">npm</span> run pack:win

<span class="token comment"># 构建安装包（Mac版）</span>
<span class="token function">npm</span> run pack:mac

<span class="token comment"># 构建安装包（Linux版）</span>
<span class="token function">npm</span> run pack:linux

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function f(x,g){const s=d("ExternalLinkIcon");return i(),l("div",null,[r,u,m,n("ol",null,[n("li",null,[p,e(" 下载"),n("a",v,[e("Node.js"),c(s)]),e("安装结束后，打开命令行输入"),h,e("将会 输出 Node.js 的版本号即表示已安装完成")]),_,b]),k])}const j=a(t,[["render",f],["__file","use-source.html.vue"]]);export{j as default};
