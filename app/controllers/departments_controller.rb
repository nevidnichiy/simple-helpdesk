class DepartmentsController < ApplicationController
  
  def index
    @departments = Department.all
    render :json => @departments
  end

  def create
    if Department.create(department_params)
      render :json => :status_ok
    end
  end
  
  def destroy
    if Department.delete(params[:id])
      render :json => :status_ok
    end
  end
  
  private
  
  def department_params
    params.require(:department).permit(:name)
  end
  
end
