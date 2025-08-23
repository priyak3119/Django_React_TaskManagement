#!/usr/bin/env python3
"""
Django Backend Setup Script
Run this script to set up the Django backend for the TaskFlow application.
"""

import os
import subprocess
import sys

def run_command(command, description):
    """Run a shell command and handle errors."""
    print(f"\n🔄 {description}...")
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(f"✅ {description} completed successfully")
        if result.stdout:
            print(result.stdout)
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error during {description}")
        print(f"Error: {e.stderr}")
        return False

def main():
    print("🚀 Setting up Django Backend for TaskFlow")
    print("=" * 50)
    
    # Check if we're in the right directory
    if not os.path.exists('manage.py'):
        print("❌ manage.py not found. Please run this script from the django_backend directory.")
        sys.exit(1)
    
    # Install dependencies
    if not run_command("pip install -r requirements.txt", "Installing Python dependencies"):
        sys.exit(1)
    
    # Create Django project structure (if not exists)
    if not os.path.exists('taskmanager'):
        if not run_command("django-admin startproject taskmanager .", "Creating Django project"):
            sys.exit(1)
    
    # Create tasks app (if not exists)
    if not os.path.exists('tasks'):
        if not run_command("python manage.py startapp tasks", "Creating tasks app"):
            sys.exit(1)
    
    # Run migrations
    if not run_command("python manage.py makemigrations", "Creating migrations"):
        sys.exit(1)
    
    if not run_command("python manage.py migrate", "Applying migrations"):
        sys.exit(1)
    
    # Create superuser
    print("\n🔐 Creating superuser account...")
    print("Please enter the following details for the admin account:")
    
    try:
        subprocess.run([
            sys.executable, "manage.py", "createsuperuser"
        ], check=True)
        print("✅ Superuser created successfully")
    except subprocess.CalledProcessError:
        print("❌ Error creating superuser")
        sys.exit(1)
    
    # Collect static files
    if not run_command("python manage.py collectstatic --noinput", "Collecting static files"):
        print("⚠️  Warning: Static files collection failed, but continuing...")
    
    print("\n🎉 Django backend setup completed successfully!")
    print("\n📋 Next steps:")
    print("1. Start the Django development server:")
    print("   python manage.py runserver")
    print("\n2. Access the admin panel at:")
    print("   http://localhost:8000/admin/")
    print("\n3. API endpoints are available at:")
    print("   http://localhost:8000/api/")
    print("\n4. Update your React frontend .env file with:")
    print("   VITE_API_BASE_URL=http://localhost:8000/api")

if __name__ == "__main__":
    main()