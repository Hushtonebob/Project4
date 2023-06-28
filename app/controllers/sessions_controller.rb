class SessionsController < ApplicationController
    def create
        user = User.find_by(username :params[:username])
        if user&.authenticate(params[:password])
            puts "session created"
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: {login:"Invalid username or password"}}, status: :unauthorized

        end

        def show 
            sessions = Session.all
            render json: user
        end
    end
end