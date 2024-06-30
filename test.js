const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "<AdminDashboard />",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "<CreateAdmin />",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "<CreateFaculty />",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "<CreateStudent />",
      },
    ],
  },
];

export const adminRoutes = adminPaths.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "<NavLink path={item.path}>{item.name}</NavLink>",
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "<NavLink path={item.path}>{item.name}</NavLink>",
      })),
    });
  }

  return acc;
}, []);
