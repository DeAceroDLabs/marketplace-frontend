export const loginForm = [
  {
    page_label: "Job Application Form",
    fields: [
      {
        field_id: "english_name",
        field_label: "Name",
        field_mandatory: "yes",
        field_placeholder: "Enter name",
        field_type: "text",
        field_value: "",
      },
      {
        field_id: "email",
        field_label: "Email",
        field_mandatory: "yes",
        field_placeholder: "Enter email",
        field_type: "text",
      },
      {
        field_id: "employment",
        field_label: "Employment desired",
        field_value: "Part-Time",
        field_mandatory: "yes",
        field_options: [
          {
            option_label: "Full-Time",
          },
          {
            option_label: "Part-Time",
          },
        ],
        field_type: "select",
      },
      {
        field_id: "contact",
        field_label: "Contact No.",
        field_mandatory: "yes",
        field_placeholder: "Enter contact no.",
        field_type: "text",
      },
      {
        field_id: "driving_license",
        field_label: "I confirm to have driving license.",
        field_type: "checkbox",
        field_value: "checked",
      },
      {
        field_id: "identity",
        field_label: "Driving License No.",
        field_mandatory: "yes",
        field_placeholder: "e.g. 012 345 678",
        field_type: "text",
      },
    ],
  },
];
