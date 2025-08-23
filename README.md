# TaskFlow - Task Management Application

Task management application built with React + Django.

## Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Vite
- **Icons:** Lucide React
- **Backend:** Django REST Framework (to be implemented)

## Features

- Create, edit, delete tasks
- Mark tasks as complete/incomplete
- Filter tasks (all, active, completed)
- Responsive design
- Modal-based task management
- Persistent storage via local storage (temporary)



### Frontend Setup

git clone <repository-url>
cd task-manager
npm install
npm run dev

### Backend Setup

cd django_backend
python -m venv venv
 .\venv\Scripts\activate

pip install -r requirements.
python manage.py makemigrations
python manage.py migrate

python manage.py runserver

 

