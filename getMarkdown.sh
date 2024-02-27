#!/bin/bash

MARKDOWN_DIR="./markdown-notes"

# 检查 markdown 目录是否存在
if [ ! -d "$MARKDOWN_DIR" ]; then
  # 克隆仓库
  git clone https://github.com/gongzhaoman/markdown-notes $MARKDOWN_DIR
else
  # 更新仓库
  cd $MARKDOWN_DIR
  git pull origin main
fi
