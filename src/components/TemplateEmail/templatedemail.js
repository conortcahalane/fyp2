//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application

import React, { Component } from "react";
import { withFirebase } from "../firebase";
import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #af5a76;
`;

const FooterText = styled.h3`
  font-size: 0.75em;
  text-align: center;
  color: papayawhip;
`;

// Creates a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  text-align: center;
  background: papayawhip;
`;

const Footer = styled.section`
  padding: 3.4em;
  text-align: center;
  background: palevioletred;
`;

class TemplatedEmailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      newsletters: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    //We are using the newsletters reference from our Firebase class to attach a listener called on()
    //which riggers every time something has changed
    this.props.firebase.newsletters().on("value", snapshot => {
      const newslettersObject = snapshot.val();

      const newslettersList = Object.keys(newslettersObject).map(key => ({
        ...newslettersObject[key],
        uid: key
      }));

      this.setState({
        newsletters: newslettersList,
        loading: false
      });
    });
  }

  //remove the listener to avoid memory leaks from using the same reference with the off()
  componentWillUnmount() {
    this.props.firebase.newsletters().off();
  }

  render() {
    const { newsletters, loading } = this.state;

    return (
      <div>
        <Wrapper>
          <Title>Newsletter</Title>

          {loading && <div>Loading ...</div>}

          <NewsletterList newsletters={newsletters} />
        </Wrapper>
        <Wrapper />
        <Footer>
          <FooterText>
            Developed by Conor Cahalane using React and Firebase
          </FooterText>
        </Footer>
      </div>
    );
  }
}

const NewsletterList = ({ newsletters }) => (
  <Wrapper>
    <Wrapper>
      {newsletters.map(newsletter => (
        <li key={newsletter.uid}>
          <span>
            <strong>ID:</strong> {newsletter.uid}
          </span>
          <span>
            <strong>Name:</strong> {newsletter.name}
          </span>
          <span>
            <strong>Description</strong> {newsletter.description}
          </span>
          <span>
            <strong>News Items</strong> {newsletter.news.body}
          </span>
          <span>
            <strong>E-Mail:</strong> {newsletter.email}
          </span>
        </li>
      ))}
    </Wrapper>
    <Wrapper>
      {/* <iframe id="newsletter" width="1000" height="5000">
       <HTMLIFrameElement></HTMLIFrameElement>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <title>[SUBJECT]</title>
      <style type="text/css">
      body {
       padding-top: 0 !important;
       padding-bottom: 0 !important;
       padding-top: 0 !important;
       padding-bottom: 0 !important;
       margin:0 !important;
       width: 100% !important;
       -webkit-text-size-adjust: 100% !important;
       -ms-text-size-adjust: 100% !important;
       -webkit-font-smoothing: antialiased !important;
     }
     .tableContent img {
       border: 0 !important;
       display: block !important;
       outline: none !important;
     }
     a{
      color:#382F2E;
    }

    p, h1{
      margin:0;
    }

    div,p,ul,h1{
      margin:0;
    }

    .bigger{
      font-size: 24px;
    }
    .bgBody{
      background: #333333;
    }
    .bgItem{
      background: #ffffff;
    }
    h2{
      color:#444444;
      font-size:16px;
      font-weight:normal;
      margin:0;
    }
    p{
      color:#AAAAAA;
      font-size:13px;
      line-height:19px;
      font-weight:normal;
    }
    a.link2{
      padding:10px 20px;
      border-radius:3px;
      -moz-border-radius:3px;
      -webkit-border-radius:3px;
      color:#ffffff;
      font-size:13px;
      background:#C3CAA9;
      text-decoration:none;
    }

    a.link1{
      font-weight:bold;
      color:#7E8564;
      font-size:13px;
    }
	
@media only screen and (max-width:480px)
		
{
		
table[class="MainContainer"], td[class="cell"] 
	{
		width: 100% !important;
		height:auto !important; 
	}
td[class="specbundle"] 
	{
		width: 100% !important;
		float:left !important;
		font-size:13px !important;
		line-height:17px !important;
		display:block !important;
		padding-bottom:15px !important;
	}
	
	td[class="specbundle_img"] 
	{
		width: 100% !important;
		float:left !important;
		display:block !important;
		font-size:13px !important;
		line-height:17px !important;
	}	
	
td[class="specbundle2"] 
	{
		width:90% !important;
		float:left !important;
		font-size:13px !important;
		line-height:17px !important;
		display:block !important;
		padding-bottom:10px !important;
		padding-left:5% !important;
		padding-right:5% !important;
		text-align:center !important;
	}
	
	td[class="specbundle3"] 
	{
		width:70% !important;
		float:left !important;
		display:block !important;
		padding-bottom:10px !important;
		padding-left:15% !important;
		padding-right:15% !important;
	}
		
td[class="spechide"] 
	{
		display:none !important;
	}
	    img[class="banner"] 
	{
	          width: 100% !important;
	          height: auto !important;
	}
	img[class="banner1"] 
	{
	          width: 95% !important;
	          height: auto !important;
	}
		td[class="left_pad"] 
	{
			padding-left:15px !important;
			padding-right:15px !important;
	}
		 
}
	
@media only screen and (max-width:540px) 

{
		
table[class="MainContainer"], td[class="cell"] 
	{
		width: 100% !important;
		height:auto !important; 
	}
td[class="specbundle"] 
	{
		width: 100% !important;
		float:left !important;
		font-size:13px !important;
		line-height:17px !important;
		display:block !important;
		padding-bottom:15px !important;
	}	
td[class="specbundle2"] 
	{
		width:90% !important;
		float:left !important;
		font-size:13px !important;
		line-height:17px !important;
		display:block !important;
		padding-bottom:10px !important;
		padding-left:5% !important;
		padding-right:5% !important;
		text-align:center !important;
	}
	
	td[class="specbundle_img"] 
	{
		width: 100% !important;
		float:left !important;
		display:block !important;
		font-size:13px !important;
		line-height:17px !important;
	}
	
	td[class="specbundle3"] 
	{
		width:70% !important;
		float:left !important;
		display:block !important;
		padding-bottom:10px !important;
		padding-left:15% !important;
		padding-right:15% !important;
	}
		
td[class="spechide"] 
	{
		display:none !important;
	}
	    img[class="banner"] 
	{
	          width: 100% !important;
	          height: auto !important;
	}
	img[class="banner1"] 
	{
	          width: 95% !important;
	          height: auto !important;
	}
		td[class="left_pad"] 
	{
			padding-left:15px !important;
			padding-right:15px !important;
	}
		
}

</style>
<script type="colorScheme" class="swatch active">
  {
    "name":"Default",
    "bgBody":"333333",
    "link":"7E8564",
    "color":"AAAAAA",
    "bgItem":"ffffff",
    "title":"444444"
  }
</script>
  </head>
  <body paddingwidth="0" paddingheight="0"  style="padding-top: 0; padding-bottom: 0; padding-top: 0; padding-bottom: 0; background-repeat: repeat; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased;" offset="0" toppadding="0" leftpadding="0">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tableContent bgBody" align="center" style='font-family:Helvetica, Arial,serif;'>
  <tbody>
    <tr>
      <td><table width="600" border="0" cellspacing="0" cellpadding="0" align="center" class="MainContainer" bgcolor="#333333">
  <tbody>
    <tr>
    
    <!-- =============================== Header ====================================== -->           

<!-- =============================== Body ====================================== -->
      <td class='movableContentContainer'>
      	
      <div class="movableContent" style="border: 0px; padding-top: 0px; position: relative;">
     

      </div>
      <div class="movableContent" style="border: 0px; padding-top: 0px; position: relative;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
  
</table>

      </div>
      <div class="movableContent" style="border: 0px; padding-top: 0px; position: relative;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0"  align="center" bgcolor='#E4A552'>  
                <tr><td height='25' colspan='3'></td></tr>

                <tr>
                  <td width='25'></td>
                  
                  <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0"  align="center">
                      <tr>
                        <td>
                          <div class="contentEditableContainer contentTextEditable">
                            <div class="contentEditable" >
                              <h1 style='font-size:35px;text-align:center;color:#ffffff;font-weight:normal;margin:0;'>Your company Name</h1>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr><td height='10'></td></tr>
                      <tr>
                        <td>
                          <div class="contentEditableContainer contentTextEditable">
                            <div class="contentEditable" >
                              <p style='text-align:center;font-size:16px;color:#ffffff;margin:0;'>
                                Your mission statement, vision or purpose in one sentence. Keep it short in the email but if you need to expand, link to your website’s <a target='_blank' href='#'>About us</a> page.
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>

                  <td width='25'></td>
                </tr>

                <tr><td height='25' colspan='3'></td></tr>
              </table>
      </div>
      <div class="movableContent" style="border: 0px; padding-top: 0px; position: relative;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td height='10'></td>
    </tr>
    <tr>
      <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td bgcolor="#ffffff" width="295" class="specbundle"><table border="0" cellspacing="0" cellpadding="0"  align="center" width="100%">
                        <tr><td height='25' colspan='3'></td></tr>

                        <tr>
                          <td width='25'></td>
                          <td valign='top'>
                            <table border="0" cellspacing="0" cellpadding="0"  align="center">
                              <tr>
                                <td align='left'>
                                  <div class="contentEditableContainer contentTextEditable">
                                    <div class="contentEditable" >
                                      <h2 >Private Classes</h2>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr><td height='15'></td></tr>
                              <tr>
                                <td align='left'>
                                  <div class="contentEditableContainer contentTextEditable">
                                    <div class="contentEditable" >
                                      <p >Do you offer private classes, themed lessons or  special events? Extend an invitation and get people to sign up.</p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr><td height='35px'></td></tr>
                              <tr>
                                <td align='left'>
                                  <div class="contentEditableContainer contentTextEditable">
                                    <div class="contentEditable" >
                                      <a target='_blank' href='#' class='link2' style='color:#ffffff;'>Link to your website</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td width='25'></td>
                        </tr>

                        <tr><td height='35' colspan='3'></td></tr>
                      </table></td>
      <td valign="top" width="10" class="specbundle">&nbsp;</td>
      <td bgcolor="#ffffff" width="295" class="specbundle"><table border="0" cellspacing="0" cellpadding="0"  align="center">
                        <tr><td height='25' colspan='3'></td></tr>

                        <tr>
                          <td width='25'></td>
                          <td valign='top'>
                            <table border="0" cellspacing="0" cellpadding="0"  align="center">
                              <tr>
                                <td align='left'>
                                  <div class="contentEditableContainer contentTextEditable">
                                    <div class="contentEditable" >
                                      <h2>Group Classes</h2>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr><td height='15'></td></tr>
                              <tr>
                                <td align='left'>
                                  <div class="contentEditableContainer contentTextEditable">
                                    <div class="contentEditable" >
                                      <p >Include a link to your group class schedule. You can also provide a link for people to download a PDF.</p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr><td height='35px'></td></tr>
                              <tr>
                                <td align='left'>
                                  <div class="contentEditableContainer contentTextEditable">
                                    <div class="contentEditable" >
                                      <a target='_blank' href='#' class='link2' style='color:#ffffff;'>Link to Schedule</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td width='25'></td>
                        </tr>

                        <tr><td height='35' colspan='3'></td></tr>
                      </table></td>
    </tr>
  </tbody>
</table>
</td>
    </tr>
  </tbody>
</table>

      </div>
      
      
      <div class="movableContent" style="border: 0px; padding-top: 0px; position: relative;">
      
      </div>
      <div class="movableContent" style="border: 0px; padding-top: 0px; position: relative;">
	  
	  <!-- =============================== footer ====================================== -->
	  
      <table width="100%" border="0" cellspacing="0" cellpadding="0"  align="center">
                  <tr><td height='50'></td></tr>

          <tr><td  style='border-bottom:1px solid #999999;'></td></tr>

          <tr><td height='25'></td></tr>

          <tr>
            <td valign='top' align='center'>
              <div class="contentEditableContainer contentTextEditable">
                <div class="contentEditable" >
                  <p style='color:#A8B0B6; font-size:13px;line-height: 16px;'>Are you giving up on your healthy resolutions? You can&nbsp;<a target='_blank' href='[UNSUBSCRIBE]' style='color:#A8B0B6;font-weight:bold;'>unsubscribe</a>&nbsp;here and we won’t make you feel guilty anymore.
                  </p>
                </div>
              </div>
            </td>
          </tr>
              </table>
      </div>
      <div class="movableContent" style="border: 0px; padding-top: 0px; position: relative;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td width="40" valign="top" class="spechide">&nbsp;</td>
      <td valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td valign="top" align="left" class="specbundle2"><div class="contentEditableContainer contentTextEditable">
                            <div class="contentEditable" align='center'>
                              <p  style='text-align:left;color:#999999;font-size:12px;font-weight:normal;line-height:20px;'>
                                <span style='font-weight:bold;'>[CLIENTS.COMPANY_NAME]</span>
								
                              </p>
							  <p  style='text-align:right;color:#999999;font-size:9px;font-weight:normal;line-height:20px;'>
								<span style=''>Newsletter created using Up2Date </span>
                              </p>
                            </div>
                          </div></td>
      <td width='16' class="specbundle2"></td>
      <td valign="top" width="120" class="specbundle3" align="center"><table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td align="center"><table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
  <tbody>
    <tr>
      
      <td valign="top" width="16" class="spechide">&nbsp;</td>
      <td valign="top" width="52" align="center"><div class="contentEditableContainer contentTwitterEditable">
                            <div class="contentEditable">
							
                              <a target='_blank' href="#"><img src="images/twitter2.png" width='52' data-customIcon="true" height='52' alt='twitter icon' data-default="placeholder" data-max-width="52"></img></a>
                            </div>
                          </div></td>
    </tr>
  </tbody>
</table></td>
    </tr>
  </tbody>
</table>
</td>
    </tr>
  </tbody>
</table>
</td>
      <td valign="top" width="40" class="spechide">&nbsp;</td>
    </tr>
  </tbody>
</table>
</td>
    </tr>
  </tbody>
</table>

      </div>
      
      <!-- =============================== footer ====================================== -->
      </td>
    </tr>
  </tbody>
</table>
</td>
    </tr>
    <tr>
    	<td height='55'></td>
    </tr>
  </tbody>
</table>

      </body>
      </html> 
      </iframe> */}
    </Wrapper>
  </Wrapper>
);

export default withFirebase(TemplatedEmailPage);
