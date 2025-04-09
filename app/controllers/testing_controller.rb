class TestingController < ApplicationController
  def index
    render inertia: 'Testing'
  end
end
