import { ElMessage } from 'element-plus'

// 复制文本
const useCopy = (text: string) => {
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
  ElMessage.success('复制成功')
}

export { useCopy }
