'''
Author: qiujiangjiang 1157060413@qq.com
Date: 2024-12-18 00:10:36
LastEditors: qiujiangjiang 1157060413@qq.com
LastEditTime: 2024-12-18 00:21:42
FilePath: \blog-source\小说推文.py
Description: 

Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
'''
import ollama
import os
from pathlib import Path

def read_txt_in_chunks(file_path, chars_per_chunk=30000):
    """读取txt文件并按照字数分块"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 按照指定字数分块
    chunks = []
    start = 0
    while start < len(content):
        # 找到最近的段落结束位置
        end = min(start + chars_per_chunk, len(content))
        if end < len(content):
            # 向后查找最近的段落结束符
            while end < len(content) and content[end] not in ['\n', '。', '！', '？']:
                end += 1
        
        chunk = content[start:end]
        chunks.append(chunk)
        start = end
        
    return chunks

def process_text_with_ollama(text):
    """使用Ollama处理文本"""
    prompt = f"""我希望你充当小说推文改写专员、文本润色员、拼写纠正员和改进员，我会发送中文文本给你，你帮我更正和改进版本。
    我希望你用更流行带有玩梗的,脑洞大些出其不意中文描述,精简故事剧情,保持相同的剧情意思，
    以主角第一人称,保留精彩的剧情对话,你只需要重新创作该内容。
    小说类型为"都市脑洞玄幻"类型，改写的字数要10000字左右的，重复率不超过30%

    以下是需要改写的内容：
    {text}
    """
    
    response = ollama.chat(model='llama3', messages=[{
        'role': 'user',
        'content': prompt
    }])
    
    return response['message']['content']

def main():
    # 获取当前目录下的所有txt文件
    txt_files = list(Path('.').glob('*.txt'))
    
    for txt_file in txt_files:
        # 读取文件并分块
        chunks = read_txt_in_chunks(txt_file)
        
        # 处理每个块并保存结果
        for i, chunk in enumerate(chunks):
            processed_text = process_text_with_ollama(chunk)
            
            # 创建输出文件名
            output_filename = f"{txt_file.stem}_processed_{i+1}.txt"
            
            # 保存处理后的文本
            with open(output_filename, 'w', encoding='utf-8') as f:
                f.write(processed_text)
            
            print(f"已处理并保存: {output_filename}")

if __name__ == "__main__":
    main()