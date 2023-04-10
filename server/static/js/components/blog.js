function Blog(){
        var { Link } = ReactRouterDOM;
        var remarkGfm = remarkGfm;
        const [posts, setPosts] = React.useState(null)
        var remarkMath = remarkMath;
        var rehypeKatex = rehypeKatex;
        
        const markdownSource = "$$ \\therefore \\frac{r_{Drawf}^3}{40,000^2} = \\frac{1^3}{1^2}$$"; 

        return (
            <div class="container" id="santa">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                    {markdownSource}
                </ReactMarkdown>            
            </div>
        )
    }
