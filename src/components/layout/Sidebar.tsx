import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
const { Sider } = Layout;

const userROlE = {
  Admin: "admin",
  Faculty: "faculty",
  Student: "student",
};

const Sidebar = () => {
  const role = "admin";
  let sidebarItems;

  switch (role) {
    case userROlE.Admin:
      sidebarItems = sidebarItemsGenerator(adminPaths, userROlE.Admin);
      break;
    case userROlE.Faculty:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userROlE.Faculty);
      break;
    case userROlE.Student:
      sidebarItems = sidebarItemsGenerator(studentPaths, userROlE.Student);
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Uni Man</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
