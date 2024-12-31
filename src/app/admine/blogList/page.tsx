// pages/blogs.js
import { blogs } from "@/app/components/adminComponent/blogs";

export default function BlogList() {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "30px",
          marginBottom: "20px",
        }}
      >
        Blogs List
      </h1>
      <table
        style={{
          width: "100%",
          maxWidth: "800px",
          borderCollapse: "collapse",
          margin: "20px auto",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                fontSize: "16px",
              }}
            >
              AUTHOR NAME
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                fontSize: "16px",
              }}
            >
              BLOG TITLE
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                fontSize: "16px",
              }}
            >
              DATE
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                fontSize: "16px",
              }}
            >
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={index}>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {blog.author}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {blog.title}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {blog.date}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    color: "black",
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
