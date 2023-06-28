class UsersController < ApplicationController
wrap_parameters format: []
    def index
        blam = User.all
        render json: blam.to_json
    end

    def create
        new_user = User.create(user_params)
        if new_user.valid?
            render json: new_user, status: :created
        else
            render json: {errors: new_user.errors.full_messages }, status: :unprocessable_entity 
        end

    end

    private

    def user_params
        params.permit(:username, :password_digest, :profilePic)
    end

end
