import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { getLoginPayment, setClearLogin } from '../../action/actionLogin'


const userNo = Yup.object().shape({
    userID: Yup.number()
      .required('Required'),
    password: Yup.string().required('Required').min(8,'Password Kurang')
  })
  

class LoginPayment extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    

    render() {
        return (
            <div>
            <h1>Any place in your app!</h1>
            <Formik
            initialValues={{ userID: '', password: '' }}
            validationSchema={userNo}
            onSubmit={(values, { setSubmitting }) => {
            const { LoginPayment } = this.props
            const { userID, password } = values
        
            LoginPayment(userID, password)
            //console.log('PROP LOGIN', this.props)
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                <Field type="text" name="userID" />
                <ErrorMessage name="userID" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </Form>
            )}
            </Formik>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    loginPaymentState: state.LoginPaymentReducer,
    loading: state.LoginPaymentReducer.loading
  })
  
  const mapDispatchToProps = {
    LoginPayment: (phone, password) => getLoginPayment(phone, password),
    clearLogin: () => setClearLogin()
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPayment)
