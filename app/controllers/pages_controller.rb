class PagesController < ApplicationController
  def home
    @colors = Color.all
  end
end
