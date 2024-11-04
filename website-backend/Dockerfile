# استفاده از تصویر Node برای بک‌اند
FROM node:18

# نصب pnpm به صورت جهانی
RUN npm install -g pnpm

# تنظیم مسیر کاری درون کانتینر
WORKDIR /app

# کپی کردن فایل‌های package.json و pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# نصب وابستگی‌ها با استفاده از pnpm
RUN pnpm install

# کپی کردن باقی فایل‌های پروژه
COPY . .

# تنظیم پورت
EXPOSE 5001

# اجرای سرور
CMD ["pnpm", "start"]
