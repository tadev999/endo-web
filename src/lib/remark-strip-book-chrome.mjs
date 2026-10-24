// Bài viết trong endo-book mang sẵn "chrome" của bản sách: tiêu đề H1,
// dòng "*Bài N / Mạch X*" và dòng "*Bài tiếp theo: ...*". Trên web các phần
// này đã được layout hiển thị, nên gỡ khỏi nội dung để không bị lặp.
function textOf(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textOf).join('');
}

function isChromeLine(node) {
  if (node.type !== 'paragraph' || node.children?.length !== 1) return false;
  if (node.children[0].type !== 'emphasis') return false;
  const t = textOf(node).trim();
  return /^(Bài \d+|Kết|Article \d+|Epilogue)\s*\/\s*(Mạch|Stream)/i.test(t) || t.startsWith('Bài tiếp theo') || t.toLowerCase().startsWith('next article');
}

export default function remarkStripBookChrome() {
  return (tree) => {
    let removedH1 = false;
    tree.children = tree.children.filter((node) => {
      if (!removedH1 && node.type === 'heading' && node.depth === 1) {
        removedH1 = true;
        return false;
      }
      return !isChromeLine(node);
    });

    // Dọn các đường kẻ ngang thừa ở đầu, cuối và liền kề nhau
    const out = [];
    for (const node of tree.children) {
      if (node.type === 'thematicBreak' && (out.length === 0 || out.at(-1).type === 'thematicBreak')) continue;
      out.push(node);
    }
    while (out.length && out.at(-1).type === 'thematicBreak') out.pop();
    tree.children = out;
  };
}
