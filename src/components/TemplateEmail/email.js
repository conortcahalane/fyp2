export function allNewsHtml(news) {
  var html = "";
  for (var i = 0; i < news.length; i++) {
    // if (i + 1 === news.length && news.length % 2 === 0) {
    html += generateSingleTable(news[i]);
    // } else if (news.length - i >= 2) {
    //   html += generateDoubleTable(news[i], news[i + 1]);
    //   i++;
    // }
  }
  return html;
}

// var generateDoubleTable = function(NewsItem1, NewsItem2) {
//   return (
//     `
//     <div class="movableContent" style="border: 0px; padding-top: 0px; position: relative;">
//       <table width="100%" border="0" cellspacing="0" cellpadding="0">
//   <tbody>
//     <tr>
//       <td height='10'></td>
//     </tr>
//     <tr>
//       <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
//   <tbody>
//     <tr>` +
//     getNewsItem(NewsItem1) +
//     ` <td valign="top" width="10" class="specbundle">&nbsp;</td>` +
//     getNewsItem(NewsItem2) +
//     `</tr>
//     </tbody>
//   </table>
//   </td>
//       </tr>
//     </tbody>
//   </table>

//         </div> `
//   );
// };

//generates a single table that will get injected into the larger template for the newsletter
//this table includes functions that will insert the users relevant data into the template
var generateSingleTable = function(news) {
  return (
    `<div class="movableContent" style="border: 0px; padding-top: 0px; position: relative;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
<tbody>
  <tr>
    <td height='10'></td>
  </tr>
  <tr>
    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
<tbody>
  <tr><td bgcolor="#ffffff" width="500" class="specbundle"><table border="0" cellspacing="0" cellpadding="0"  align="center">
  <tr><td height='15' colspan='3'></td></tr>

  

      <td bgcolor="#ffffff" width="500" class="specbundle"><table border="0" cellspacing="0" cellpadding="0"  align="center">
      <tr><td height='10' colspan='3'></td></tr>

      <tr>
        <td width='25'></td>
        <td valign='top'>
          <table border="0" cellspacing="0" cellpadding="0"  align="center">

           ` +
    getNewsHeading(news.heading) +
    `
                        ` +
    getNewsBody(news.body) +
    `
                        ` +
    getNewsLink(news.link) +
    `</table>
    </td>
    <td width='25'></td>
  </tr>

<tr><td height='30' colspan='3'></td></tr>
</table></td>
    </tr>
    </tbody>
  </table>
  </td>
      </tr>
    </tbody>
  </table>
  
        </div>`
  );
};

// var generateSingleParagraph = function(NewsItem) {
//   return (
//     `<div class="column" style="width:100%; max-width:280px; display:inline-block; vertical-align:top; margin-left:10px;">
//                 <table width="100%" style="border-spacing:0">
//                 <tr width="10px"></tr>
//                     <tr>
//                         <td class="inner" style="padding-top: 5px;padding-bottom:5px; padding-right:5px; padding-left:30px;">

//                                 <tr>
//                                     <td align="left" class="text" style="padding-top:0;padding-bottom:0;padding-left:0;padding-right:0;">
//                                         <table border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px solid #159635; word-break:break-all;">
//                                             <tr>
//                                                 <td height="10" width="85" style="font-size:10px; line-height:10px">
//                                                 </td>
//                                             </tr>
//                                         </table>
//                                     </td>
//                                 </tr>
//                                 <br></br>
//                             ` +
// getNewsItem(NewsItem) +
// `
//                         </td>
//                     </tr>
//                 </table>
//             </div>`
//   );
// };

var getNewsItem = function(news) {
  var html = "";
  for (var i = 0; i < news.length; i++) {
    html +=
      `<td bgcolor="#ffffff" width="295" class="specbundle"><table border="0" cellspacing="0" cellpadding="0"  align="center">
      <tr><td height='25' colspan='3'></td></tr>

      <tr>
        <td width='25'></td>
        <td valign='top'>
          <table border="0" cellspacing="0" cellpadding="0"  align="center">

           ` +
      getNewsHeading(news[i].heading) +
      `
                            ` +
      getNewsBody(news[i].body) +
      `
                            ` +
      getNewsLink(news[i].link) +
      `
      </table>
      </td>
      <td width='25'></td>
    </tr>

    <tr><td height='35' colspan='3'></td></tr>
  </table></td>`;
  }
  return html;
};

//injects a html segment including the users heading data into the single table
var getNewsHeading = function(heading) {
  var html = "";
  if (heading) {
    html =
      `<!-- start of header -->
      <tr>
        <td align='left'>
          <div class="contentEditableContainer contentTextEditable">
            <div class="contentEditable" >
<!--  header -->

              <h1>` +
      heading +
      `</h1>
      <br>
            </div>
          </div>
        </td>
      </tr>
<!-- end of header -->`;
  }
  return html;
};

//injects a html segment including the users body data into the single table
var getNewsBody = function(body) {
  var html = "";
  if (body) {
    html =
      `<!-- start of body -->
      <tr>
        <td align='left'>
          <div class="contentEditableContainer contentTextEditable">
            <div class="contentEditable" style="">
<!--  body -->

              <p ><font color="#002370"><font size="4">` +
      body +
      `</font></font></p>
            </div>
          </div>
        </td>
      </tr>
<!-- end of body -->`;
  }
  return html;
};

//injects a html segment including the users link data into the single table
var getNewsLink = function(link) {
  var html = "";
  if (link) {
    html =
      `<!-- start of link -->
      <tr>
        <td align='left'>
          <div class="contentEditableContainer contentTextEditable">
            <div class="contentEditable" >
<!-- link -->
<br>
<br>
<a href='` +
      link +
      `' class='link2' style='color:#ffffff;'>Find out more</a>
             

            </div>
          </div>
        </td>
      </tr>
<!-- end of link -->`;
  }
  return html;
};
