'''
Author: qiujiangjiang 1157060413@qq.com
Date: 2025-02-03 03:48:54
LastEditors: qiujiangjiang 1157060413@qq.com
LastEditTime: 2025-02-03 03:50:54
FilePath: \blog-source\test.py
Description: 

Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
'''
import pandas as pd
import os

# 定义包含Excel文件的文件夹路径
folder_path = r'C:\Users\Administrator\Desktop\新建文件夹 (2)'

# 获取文件夹中所有的Excel文件
excel_files = [f for f in os.listdir(folder_path) if f.endswith('.csv') or f.endswith('.xls')]

# 创建一个空的DataFrame来存储合并后的数据
combined_df = pd.DataFrame()

# 遍历每个Excel文件并读取数据
for file in excel_files:
    file_path = os.path.join(folder_path, file)
    df = pd.read_csv(file_path)
    combined_df = pd.concat([combined_df, df], ignore_index=True)

# 将合并后的数据保存到一个新的Excel文件中
output_file = folder_path+'\combined_output.xlsx'
combined_df.to_excel(output_file, index=False)

print(f"合并完成，结果已保存到 {output_file}")