import React from "react";

const profileLabels = [
  {
    title: "Account Information",
    fields: [
      {
        label: "Username",
        key: "username",
        component: ({ username }) => <span>{username}</span>
      },
      {
        label: "Site rank",
        key: "rank",
        component: ({ username }) => <span>{username}</span>
      },
      {
        label: "Posts",
        key: "postCount",
        component: ({ username }) => <span>{username}</span>
      },
      {
        label: "Registered on",
        key: "created",
        component: ({ username }) => <span>{username}</span>
      }
    ]
  },
  {
    title: "Naruto Arena Ladder",
    fields: [
      {
        label: "Registered on",
        key: "created",
        component: ({ username }) => <span>{username}</span>
      }
    ]
  },
  {
    title: "Site activity",
    fields: [
      {
        label: "Registered on",
        key: "created",
        component: ({ username }) => <span>{username}</span>
      }
    ]
  }
];

export default profileLabels;
