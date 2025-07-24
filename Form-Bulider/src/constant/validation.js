export const formFields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    validation: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: "Enter a valid email address",
      },
    },
  },
    {
    name: "email2",
    label: "Email (Secondary)",
    type: "email",
    validation: {
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: "Enter a valid email",
      },
    },
  },
    {
    name: "title",
    label: "Title",
    type: "text",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true,
    validation: {
      required: "Phone number is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Phone number must be 10 digits",
      },
    },
  },
    {
    name: "mobile",
    label: "Mobile",
    type: "tel",
    required: true,
    validation: {
      required: "Mobile number is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Mobile number must be 10 digits",
      },
    },
  },
    {
    name: "score",
    label: "Lead Score",
    type: "number",
  },
  {
    name: "industry",
    label: "Industry",
    type: "text",
    required: false,
  },
  {
    name: "revenue",
    label: "Annual Revenue",
    type: "number",
    validation: {
      min: { value: 0, message: "Must be non-negative" },
    },
  },
  {
    name: "otpOut",
    label: "Email OTP Out",
    type: "text",
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    required: false,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
  },
  {
    name:"companyEmail",
    label:"Company Email",
    type:"email",
  },
  {
    name: "fax",
    label: "FAX",
    type: "tel",
    validation: {
      pattern: {
        value: /^[0-9]{10}$/,
        message: "FAX must be 10 digits",
      },
    },
  },
  {
    name: "website",
    label: "Website",
    type: "url",
    validation: {
      pattern: {
        value: /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([/\w .-]*)*\/?$/,
        message: "Enter a valid website URL",
      },
    },
  }, 
  {
    name: "leadStatus",
    label: "Lead Status",
    type: "text",
  },
  {
    name: "employees",
    label: "No of Emp",
    type: "number",
    validation: {
      min: { value: 1, message: "Must be greater than 0" },
    },
  },
  {
    name: "rating",
    label: "Rating",
    type: "number",
    validation: {
      min: { value: 0, message: "Min rating is 0" },
      max: { value: 5, message: "Max rating is 5" },
    },
  },
  {
    name: "secondaryEmail",
    label: "Secondary Email",
    type: "email",
    validation: {
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: "Enter a valid email",
      },
    },
  },
];
