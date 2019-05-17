import React , { Component } from "react";
import { Link, Router } from "../../../router/routes";
import { connect } from "react-redux";
import { reduxForm, Field, change, untouch } from "redux-form";
import {Email} from "../../common/FormField";
import {emailFormField} from "./formFields";

const linkStyle = {
  margin: '0 10px 0 0'
}

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    renderFields(emailFormField) {
        console.log(emailFormField)
        return emailFormField.map(( { label ,name, type, required, autoFocus = false } ) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} autoFocus={autoFocus} component={Email} />
            )
        })
    }
    // resetFields = (formName, fieldsObj) => {
    //     console.log(formName);
    //     console.log(fieldsObj);
    //     Object.keys(fieldsObj).forEach(fieldKey => {

    //           //reset the field's value
    //         this.props.dispatch(change(formName, fieldKey, fieldsObj[fieldKey]));

    //           //reset the field's error
    //         this.props.dispatch(untouch(formName, fieldKey));

    //     });
    // }

    onSubmit(values){
       console.log(values);
    }

render(){
    const { pathname, authenticated, query = false, handleSubmit, load, pristine, reset, submitting } = this.props;
    var logo_height = {
        height: '50px'
    };
    // console.log(pathname);
        return(
            <footer>
                <div className="container-fluid mt-3 footer-bg-1">
                    <div className="container">
                        <div className="row menu-top justify-content-between text-white">
                            <div className="row no-gutters col-xs-12 col-md-8 d-flex justify-content-md-start">
                                <div className="col-xs-12 col-md-5 col-lg-4 d-flex justify-content-center justify-content-md-start">
                                    <div className="p-1 align-self-center normalsize">รับข่าวสาร และโปรโมชั่นก่อนใคร</div>
                                </div>
                                <div className="col-xs-12 col-md-7 col-lg-8 d-flex  d-flex justify-content-center justify-content-md-start">
                                    <div className="p-1 align-self-center">
                                        <form onSubmit={handleSubmit((event)=>this.onSubmit(event))}>
                                            { this.renderFields(emailFormField) }
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters col-xs-12 col-md-4 d-flex justify-content-md-end">
                                <div className="col-xs-12 col-md-12 d-flex justify-content-center  justify-content-md-end">
                                <div className="p-2 align-self-center normalsize">ติดตามเรา</div>
                                <div className="p-1 align-self-center"><Link prefetch href='/'><img src="static/images/theme/footer/ico_facebook_40.png" alt="Facebook" className="img-fluid mx-auto d-block" /></Link></div>
                                <div className="p-1 align-self-center"><Link prefetch href='/'><img src="static/images/theme/footer/ico_youtube_40.png" alt="Youtube" className="img-fluid mx-auto d-block" /></Link></div>
                                <div className="p-1 align-self-center"><Link prefetch href='/'><img src="static/images/theme/footer/ico_line_40.png" alt="LINE" className="img-fluid mx-auto d-block" /></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid footer-bg-2">
                    <div className="container">
                        <div className="row menu-top justify-content-md-center">

                            <div className="no-gutters col-xs-12 col-md-3 justify-content-start">
                                <div className="row d-none d-sm-block">
                                    <div className="col-xs-12 col-md-12 text-center d-flex justify-content-start">
                                        <div className="p-1"><h6 className="title">SHOP 1781</h6></div>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-xs-12 col-md-12 d-none d-sm-block">
                                        <div className="p-1">จัดจำหน่ายสินค้าสุขภาพและความงามที่ได้ผ่านการรับรองมาตรฐานจากองค์การอาหารและยา ด้วยส่วนผสมอันทรงคุณค่าจากธรรมชาติ นำเข้าจากต่างประเทศ ได้รับรางวัลการวิจัยเป็นเครื่องการันตีประสิทธิภาพ</div>
                                    </div>
                                </div>
                            </div>

                            <div className="no-gutters col-xs-12 col-md-2 justify-content-start">
                                <div className="row d-none d-sm-block">
                                    <div className="col-xs-12 col-md-12 text-center d-flex justify-content-start">
                                        <div className="p-1"><h6 className="title">ข้อมูลบริษัท</h6></div>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-xs-12 col-md-12 d-none d-sm-block">
                                        <div className="p-1">
                                            <ul>
                                                <li>เกี่ยวกับเรา</li>
                                                <li>เงื่อนไขและข้อกำหนด</li>
                                                <li>ความเป็นส่วนตัว</li>
                                                <li>ติดต่อเรา</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="no-gutters col-xs-12 col-md-2 justify-content-start">
                                <div className="row d-none d-sm-block">
                                    <div className="col-xs-12 col-md-12 text-center d-flex justify-content-start">
                                        <div className="p-1"><h6 className="title">บัญชีของฉัน</h6></div>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-xs-12 col-md-12 d-none d-sm-block">
                                        <div className="p-1">
                                            <ul>
                                                <li>บัญชีผู้ใช้</li>
                                                <li>ที่อยู่จัดส่งสินค้า</li>
                                                <li>รายการโปรด</li>
                                                <li>ประวัติการสั่งซื้อ</li>
                                                <li>คูปองส่วนลด</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="no-gutters col-xs-12 col-md-2 justify-content-start">
                                <div className="row d-none d-sm-block">
                                    <div className="col-xs-12 col-md-12 text-center d-flex justify-content-start">
                                        <div className="p-1"><h6 className="title">ศูนย์ให้ความช่วยเหลือ</h6></div>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-xs-12 col-md-12 d-none d-sm-block">
                                        <div className="p-1">
                                            <ul>
                                                <li>วิธีการสั่งซื้อ</li>
                                                <li>คำถามที่พบบ่อย</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="no-gutters col-xs-12 col-md-3 text-center  justify-content-end">
                                <div className="row d-none d-sm-block">
                                    <div className="col-xs-12 col-md-12 text-center d-flex justify-content-start">
                                        <div className="p-1"><h6 className="title">ดาวน์โหลดแอปพลิเคชั่น</h6></div>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-xs-6 col-md-6 d-none d-sm-block">
                                        <div className="p-1"><Link prefetch href='/'><img src="static/images/theme/footer/qrcode_website.png" alt="QR Code" className="img-fluid d-block" /></Link></div>
                                    </div>
                                    <div className="row no-gutters col-xs-6 col-md-6 d-flex justify-content-center">
                                        <div className="p-1"><Link prefetch href='/'><img src="static/images/theme/footer/ios_45.png" alt="App Store" className="img-fluid d-block" /></Link></div>
                                        <div className="p-1"><Link prefetch href='/'><img src="static/images/theme/footer/android_45.png" alt="Play Store" className="img-fluid d-block" /></Link></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container-fluid footer-bg-3">
                    <div className="container">
                        <div className="row menu-top justify-content-between">
                            <div className="col-xs-12 col-md-6 col-lg-6  text-center d-flex justify-content-center justify-content-md-start">
                                <div className="p-1 d-none d-sm-block"><Link prefetch href='/'><img src="static/images/theme/logo/lifestar.png" style={logo_height} alt="Lifestar" className="img-fluid mx-auto d-block" /></Link></div>
                                <div className="p-1 d-block align-self-center  justify-content-center justify-content-md-start">สงวนลิขสิทธิ์ &copy; 2562 บริษัท ไลฟ์สตาร์ จำกัด</div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-5 text-center d-flex justify-content-end">
                                <div className="p-2 align-self-center"><img src="static/images/theme/footer/cashdelivery.png" alt="Cash on delivery" className="img-fluid mx-auto d-block" /></div>
                                <div className="p-2 align-self-center"><img src="static/images/theme/footer/visa_mastercard.png" alt="Visa / Master Card" className="img-fluid mx-auto d-block" /></div>
                                <div className="p-2 align-self-center"><img src="static/images/theme/footer/kerry.png" alt="Kerry Express" className="img-fluid mx-auto d-block" /></div>
                                <div className="p-2 align-self-center"><Link prefetch href='/'><img src="static/images/theme/footer/ocpb.jpg" alt="Shop1781" className="img-fluid mx-auto d-block" /></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
        
}

function validate(values){
	// console.log(values);
	const errors = {};
	emailFormField.forEach(({ name, required }) => {
		if(!values[name] && required){
			errors[name] = 'กรุณากรอกข้อมูล อีเมลล์'
		}
	});
	return errors;
}

Footer = reduxForm({ 
	validate,
	form: "Footer"
})(Footer);
  
export default connect(null)(Footer);