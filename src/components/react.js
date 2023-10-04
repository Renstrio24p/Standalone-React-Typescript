import React from "react";
import styles from '../assets/css/modules/app.module.css';
export default function ReactApp() {
    return (React.createElement("div", { className: styles["react-content"] },
        React.createElement("div", { className: styles["react-body"] },
            React.createElement("div", { className: styles["react-head"] },
                React.createElement("a", { href: "https://react.dev/" },
                    React.createElement("img", { src: "images/react.svg", className: styles.react })),
                React.createElement("div", { className: styles["react-text"] },
                    React.createElement("h1", { className: styles["react-header"] }, "Standalone React TS"),
                    React.createElement("p", { className: styles['react-pgraph'] },
                        React.createElement("span", { className: styles["react-title"] }, "Make your life simple and organize with "),
                        React.createElement("img", { src: "images/react.svg", className: styles["react-img"] }),
                        React.createElement("span", { className: styles['react-js'] },
                            " React + ",
                            React.createElement("img", { src: "images/Typescript.png", className: styles['typescript-img'] }))),
                    React.createElement("p", { className: styles["react-title"] }, "Webpack Version. supports Codespace and Typescript")),
                React.createElement("a", { href: "https://webpack.js.org/" },
                    React.createElement("img", { src: "images/webpack.png", className: styles.webpack }))),
            React.createElement("div", { className: styles.footer },
                React.createElement("p", { className: styles.version }, "Version 1.0.6"),
                React.createElement("a", { href: "https://github.com/features/codespaces/", className: styles.git },
                    " ",
                    React.createElement("img", { src: "images/github.png", className: styles.github }),
                    " Codespaces ")))));
}
//# sourceMappingURL=react.js.map