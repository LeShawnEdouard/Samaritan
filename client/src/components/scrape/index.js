// import React, { Component } from "react";
// // import "./style.css";
// import Row from "react-bootstrap/Row";
// import axios from "axios";
// import cheerio from "cheerio";
// import Table from "react-bootstrap/Table";

// class Scrape extends Component {
//   state = {
//     results: []
//   };

//   componentDidMount() {
//     axios.get("https://www.nhl.com/").then(function (response) {
//       // Load the html body from axios into cheerio
//       console.log("this is a test!!!!");
//       var $ = cheerio.load(response.data);
//       var articles = []
//       console.log("made it here");
//       // For each element with a "title" class
//       $(".highlight_container").each(function (i, element) {
//         // Save the text and href of each link enclosed in the current element
//         var title = $(element).children(".highlight_title_mini").text();
//         var link = $(element).children("a").attr("href");
//         var paraGraph = $(element).children("p").text();
//         console.log(title + "this is from us");
//         articles.push({
//           title: title,
//           link: link,
//           paraGraph: paraGraph
//         })
//       }
//       )
//       this.setState({
//         results: articles
//       })
//     }
//     )
//   }

//   render() {

//     return (
//       <div>
//         <Row>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Article</th>
//                 <th>Link</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.results.map(article => (
//                 <tr>
//                   <td>
//                     {article.title}
//                   </td>
//                   <td>
//                     {article.link}
//                   </td>
//                   <td>
//                     {article.paraGraph}
//                   </td>
//                 </tr>
//               ) )}
//             </tbody>
//           </Table>
//         </Row>
//       </div>
//     );
//   }
// }

//   export default Scrape;