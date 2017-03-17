const Article = React.createClass({
    handleDelete() {
        this.props.onDelete(this.props.id);
    },

    render() {
        const {
            children,
            onDelete
            } = this.props;

        return (
            <div className="article">
                <span className="article__delete-icon" onClick={this.handleDelete}> × </span>
                {children}
            </div>
        );
    }
});

var ArticleEditor = React.createClass({
    getInitialState: function() {
        return {
            value: '',
            condition: false
        };
    },

    handleChange: function() {
        this.setState({
            value: this.refs.textarea.value
        });
    },

    handleClick: function() {
        this.setState( { condition : !this.state.condition } );
    },

    handleArticleAdd() {
        const newArticle = {
            value: this.state.value,
            id: Date.now()
        };

        this.props.onArticleAdd(newArticle);

        this.resetState();
    },

    resetState() {
        this.setState({
            value: '',
            condition: false
        });
    },

    rawMarkup: function() {
        var md = new Remarkable();
        return { __html: md.render(this.state.value) };
    },

    render: function() {
        return (
            <div className="editor">
                <h3 className="editor__title">Create new article for your blog</h3>
                <textarea
                    className="editor__textarea"
                    onChange={this.handleChange}
                    ref="textarea"
                    placeholder="Type some *markdown* here..."
                    defaultValue={this.state.value} />
                <button className="editor__button view"
                    onClick={this.handleClick}>Preview the article</button>
                <div
                    className={this.state.condition ? "showed" :"hidden"}
                    dangerouslySetInnerHTML={this.rawMarkup()}
                    ></div>
                <button className="editor__button add" onClick={this.handleArticleAdd}>Add</button>
            </div>
        );
    }
});

const ArticlesGrid = React.createClass({
    componentDidMount() {
        const grid = this.grid;

        this.msnry = new Masonry(grid, {
            columnWidth: 240,
            gutter: 10,
            isFitWidth: true
        });
    },

    componentDidUpdate(prevProps) {
        if (this.props.articles.length !== prevProps.articles.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },

    render() {
        const {
            articles,
            onArticleDelete
        } = this.props;

        return (
            <div className="grid" ref={c => this.grid = c}>
                {
                    articles.map(article =>
                        <Article
                            key={article.id}
                            id={article.id}
                            onDelete={onArticleDelete}
                        >
                            {article.value}
                        </Article>
                    )
                }
            </div>
        );
    }
});


const ArticleApp = React.createClass({
    getInitialState() {
        return {
            articles: []
        };
    },

    componentDidMount() {
        const savedArticles = JSON.parse(localStorage.getItem('articles'));

        if (savedArticles) {
            this.setState({ articles: savedArticles });
        }
    },

    componentDidUpdate() {
        const articles = JSON.stringify(this.state.articles);

        localStorage.setItem('articles', articles);
    },

    handleArticleDelete(articleId) {
        this.setState({
            articles: this.state.articles.filter(article => article.id !== articleId)
        });
    },

    handleArticleAdd(newArticle) {
        this.setState({
            articles: [newArticle, ...this.state.articles]
        });
    },

    render() {
        return (
            <div className="app">
                <h2 className="app__header">BlogApp</h2>

                <ArticleEditor onArticleAdd={this.handleArticleAdd} />

                <ArticlesGrid
                    articles={this.state.articles}
                    onArticleDelete={this.handleArticleDelete}
                />
            </div>
        );
    }
});


ReactDOM.render(
    <ArticleApp />,
    document.getElementById('root')
);