export function renderRichTextToHTML(json) {
        return json.children.map((node) => {
          if (node.type === "paragraph") {
            const inner = node.children.map((child) => {
              const content = child.value || "";
              return child.bold ? `<strong>${content}</strong>` : content;
            }).join("");
            return `<p>${inner}</p>`;
          }
          return "";
        }).join("");
    }