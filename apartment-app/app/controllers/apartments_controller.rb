class ApartmentsController < ApplicationController
    before_action :set_apartment, only: [:show, :update, :destroy]
    
    def index
       apartments = Apartment.all
       render json: apartments
    end
    
    def show
    end
    
    def new
      apartment = Apartment.new
      render json: apartment
    end
    
    def edit
       @apartment = current_user.apartments.find(params[:id])
    end
    
    def create
       apartment = current_user.apartments.create(apartment_params)
       
      respond_to do |format|
          if apartment.save
              format.html { redirect_to apartment, notice: 'Apartment was successfully created.' }
              format.json { render :show, status: :created, location: apartment }
          else
              format.html { render :new }
              format.json { render json: apartment.errors, status: :unprocessable_entity }
          end
      end
      
    #   if apartment.valid?
    #     render json: apartment
    #   else
    #     render json: apartment.errors, status: :unprocessable_entity
    #   end
       
    end
    
    private
    
    def set_apartment
       @apartment = Apartment.find(params[:id]) 
    end
    
    def apartment_params
       params.require(:apartment).permit(:street_1, :street_2, :city, :postal_code, :state, :country)
    end
end
