exports.allNewsHtml = function(NewsItem) {
  var html = "";
  for (var i = 0; i < news.length; i++) {
    if (i + 1 === news.length && news.length % 2 === 0) {
      html += generateSingleTable(news[i]);
    } else if (news.length - i >= 2) {
      html += generateDoubleTable(news[i], news[i + 1]);
      i++;
    }
  }
  return html;
};

var generateDoubleTable = function(NewsItem1, NewsItem2) {
  return (
    `
    <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#FFFFFF">
    <tr>
        <td class="two-column" style="padding-top:0;padding-bottom:0;padding-left:0;padding-right:0;text-align:center;font-size:0;">
                            <!--[if (gte mso 9)|(IE)]>
                        <table width="100%" style="border-spacing:0;">
                        <tr>
                        <td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-left:0;padding-right:0;">
                        <![endif]-->
                        ` +
    generateSingleParagraph(NewsItem1) +
    `
                            <!--[if (gte mso 9)|(IE)]>
                        </td>
                        <td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-left:0;padding-right:0;">
                        <![endif]-->
                        ` +
    generateSingleParagraph(NewsItem2) +
    `
                            <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
        </td>
    </tr>
    </table> `
  );
};

var generateSingleTable = function(NewsItem) {
  return (
    `<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#FFFFFF" style="word-break: break-all;padding-left:10px; max-width:200px;">
                <tr>
                    <td align="center" style="padding-left:140px; padding-right:40px; padding-top:40px; padding-bottom:40px">
                    <p style="color:#5b5f65; font-size:28px; text-aligncenter">
                    </p>
                    <center>
                    ` +
    generateSingleParagraph(NewsItem) +
    `
                    </center>
                    </td>
                </tr>
            </table>`
  );
};

var generateSingleParagraph = function(Newsitem) {
  return (
    `<div class="column" style="width:100%; max-width:280px; display:inline-block; vertical-align:top; margin-left:10px;">
                <table width="100%" style="border-spacing:0">
                <tr width="10px"></tr>
                    <tr>
                        <td class="inner" style="padding-top: 5px;padding-bottom:5px; padding-right:5px; padding-left:30px;">
                             `` // +getNewsletterName(name) +
                                <tr>
                                    <td align="left" class="text" style="padding-top:0;padding-bottom:0;padding-left:0;padding-right:0;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px solid #159635; word-break:break-all;">
                                            <tr>
                                                <td height="10" width="85" style="font-size:10px; line-height:10px">
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <br></br>
                                ` +
    NewsItem(news) +
    `
                        </td>
                    </tr>
                </table>
            </div>`
  );
};

// var getNewsletterName = function(name) {
//     var html = '';
//     if (name) {
//         html = `
//         <tr>
//             <td align="left" class="padding-top:0;padding-bottom:0;padding-left:0;padding-right:0;">
//                 <p style="font-size:22px; text-decoration:none; color:#3a3d41; font-family:Verdana, Geneva, sans-serif; text-align:left">
//                 <strong> `+ name + `</strong></p>
//                 <p style="font-size:22px; text-decoration:none; color:#3a3d41; font-family:Verdana, Geneva, sans-serif; text-align:left">
//                 <strong> `+ name + `</strong></p>
//             </td>
//         </tr>
//         `;
//     }
//     return html;
// }

var getNewsItem = function(news) {
  var html = "";
  for (var i = 0; i < news[0].length; i++) {
    html +=
      `
                    <tr>
                        <td align="left" cellpadding="0" class="text" style="padding-bottom:0;padding-right:0;padding-left:0;padding-top:0px;">
                        
                        <br></br>
                        <br></br>

                            ` +
      getNewsHeading(news[i][i][0].value) +
      `
                            ` +
      getNewsBody(news[i][i][1].value) +
      `
                            ` +
      getNewsLink(news[i][i][2].value) +
      `
                        <br></br>
                        <br></br>
                        </td>
                        </tr>`;
  }
  return html;
};

var getNewsHeading = function(heading) {
  var html = "";
  if (heading) {
    html =
      `
     <tr>
        <td align="left" class="text" style="padding-top:0;padding-bottom:0;padding-left:0;padding-right:0;">
            <p style="font-size:22px; text-decoration:none; color:#3a3d41; font-family:Verdana, Geneva, sans-serif; text-align:left">
                <strong> ` +
      heading +
      `</strong></p>
        </td>
    </tr>
  `;
  }
  return html;
};

var getNewsBody = function(body) {
  var html = "";
  if (body) {
    html =
      `
        <tr>
           <td align="left" class="text" style="padding-top:0;padding-bottom:0;padding-left:0;padding-right:0;">
               <p style="font-size:22px; text-decoration:none; color:#3a3d41; font-family:Verdana, Geneva, sans-serif; text-align:left">
                   <strong> ` +
      body +
      `</strong></p>
           </td>
       </tr>
     `;
  }
  return html;
};

var getNewsLink = function(link) {
  var html = "";
  if (link) {
    html =
      `
        <tr>
           <td align="left" class="text" style="padding-top:0;padding-bottom:0;padding-left:0;padding-right:0;">
               <p style="font-size:22px; text-decoration:none; color:#3a3d41; font-family:Verdana, Geneva, sans-serif; text-align:left">
                   <a href=" ` +
      link +
      `" target="_blank" style="color:#159635; text-decoration:none">
                   <strong>Read the article >></strong>
                   </a>
                </p>
           </td>
       </tr>
     `;
  }
  return html;
};
