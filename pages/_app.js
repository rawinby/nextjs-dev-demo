import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import App, { Container } from "next/app";
import NProgress from "nprogress";
import { Router } from "../router/routes";
import { Provider } from "react-redux";
import store from "../store";
import Header from "../components/Layout/Header/Header2";
import Footer from "../components/Layout/Footer/Footer2";

// import { createStore, applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";
// import reducers from "../reducers";
// CSS
import '../static/css/nprogress.scss';
import '../static/css/style.scss';


// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

Router.events.on('routeChangeStart', link => {
  console.log(`Loading: ${link}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {

	constructor(props){
		super(props);
	}

  // static propTypes = {
  //   users: PropTypes.array.isRequired,
  //   authenticated: PropTypes.bool
  // };
  
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    // const response = await getUsers();

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {

      // users: [],
      // authenticated: isAuthenticated(ctx),
      pageProps
    };

  }

  // componentDidMount() { // สำรหับสถานะ
  //   this.timerID = setInterval(() => this.tick(), 1000);
  //   // console.log('componentDidMount');
      // $('button').on('click',function() {
  //     alert('asdasdas');
  //   })
  // }

  // componentDidUpdate() { // สำหรับ Component มีการ Update
  //   // console.log('componentDidUpdate');
  // }

  // componentWillUnmount() { // การเอา Component ออกจากหน้าเว็บ
  //   clearInterval(this.timerID);
  //   // console.log('componentWillUnmount');
  // }
  


  render () {
    console.log(this.props);
    const { Component, pageProps, title = "Template React", authenticated, router, users = [] } = this.props;
    // console.log(router.pathname);
    // console.log(authenticated);
    // console.log(url);
    // console.log(users)
    // console.log(url)
    // console.log(router.route);
    // console.log(pageProps);
    return (
      <Container>
        <Provider store={store}>
          <Head>
            <title>{title}</title>
            {/* Import CSS for nprogress */}
            <link rel='stylesheet' type='text/css' href='/static/css/bootstrap.min.css' /> 
            {/* Import Js */}
            <script src="/static/js/jquery.min.js" />
            {/*<script src="/static/js/popper.min.js" /> */}
            <script src="/static/js/bootstrap.min.js" />
           
          </Head>
          <Header authenticated={authenticated} pathname={router.pathname} />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </Container>
    )
  }
}

export default MyApp;