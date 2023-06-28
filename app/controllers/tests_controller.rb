class TestsController < ApplicationController

    def index
        blam = Test.all
        render json: blam.to_json
    end

    def show
        blam = Test.
    end

end
