// pages/blogs.js
import { blogs } from "@/app/components/adminComponent/blogs";

export default function BlogList() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontWeight:"bold", fontSize:"30px"}}>Blogs List</h1>
      <table
        style={{
          width: "70%",
          borderCollapse: "collapse",
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px",fontSize:"18px" }}>AUTHOR NAME</th>
            <th style={{ border: "1px solid #ddd", padding: "8px",fontSize:"18px" }}>BLOG TITLE</th>
            <th style={{ border: "1px solid #ddd", padding: "8px",fontSize:"18px" }}>DATE</th>
            <th style={{ border: "1px solid #ddd", padding: "8px",fontSize:"18px" }}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px",textAlign: "center" }}>
                {blog.author}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" ,textAlign: "center"}}>
                {blog.title}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" ,textAlign: "center"}}>
                {blog.date}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px",textAlign: "center" }}>
                <p
                  style={{
                    marginLeft:"10px",
                    textAlign: "center",
                      color: "black",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                    

                  }}
                >
                  X
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
