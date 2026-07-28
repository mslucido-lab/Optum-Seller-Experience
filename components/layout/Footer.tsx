const footerColumns = [
  {
    title: "Company",
    links: ["About Us", "Newsroom", "Careers", "More Optum Sites"],
  },
  {
    title: "Support",
    links: [
      "Customer Support",
      "Developer Support",
      "Customer Community",
      "Enrollment Services",
      "Payer Lists",
      "Product Logins",
      "Locations & Distributors",
    ],
  },
  {
    title: "Privacy & Conduct",
    links: [
      "Code of Conduct",
      "Supplier Code of Conduct",
      "Privacy Notice",
      "Terms of Use",
    ],
  },
];

const socialIcons = ["in", "f", "𝕏", "📷"];

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#090b17] border-t border-border px-7 pt-9 pb-5">
      <div className="grid grid-cols-[repeat(3,auto)_1fr] gap-8 mb-7">
        {footerColumns.map((col) => (
          <div key={col.title}>
            <div className="text-[13px] font-bold text-text-primary mb-3">{col.title}</div>
            {col.links.map((link) => (
              <a
                key={link}
                className="block text-xs text-text-muted mb-2 cursor-pointer hover:text-text-primary transition-colors no-underline"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <div className="text-[11px] text-text-subtle">
            © 2024 Optum, Inc. All rights reserved. Stock photos used.
          </div>
          <div className="flex gap-4 mt-1.5">
            <a className="text-[11px] text-text-subtle cursor-pointer hover:text-text-body no-underline">
              Opt out
            </a>
            <a className="text-[11px] text-text-subtle cursor-pointer hover:text-text-body no-underline">
              Accessibility
            </a>
            <a className="text-[11px] text-text-subtle cursor-pointer hover:text-text-body no-underline">
              Vulnerability report
            </a>
          </div>
        </div>
        <div>
          <div className="text-[13px] font-bold text-text-primary mb-2">Follow us</div>
          <div className="flex gap-2.5">
            {socialIcons.map((icon) => (
              <div
                key={icon}
                className="w-7 h-7 rounded-[6px] bg-navy-card border border-border flex items-center justify-center text-xs cursor-pointer text-text-muted hover:border-border-lt hover:text-text-primary transition-colors"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
