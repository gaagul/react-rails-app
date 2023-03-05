# frozen_string_literal: true

class Api::DirectUploadsController < ActiveStorage::DirectUploadsController
  def create
    blob = ActiveStorage::Blob.create_before_direct_upload!(**blob_args)
    blob_url = rails_blob_url(blob)
    render json: direct_upload_json(blob).merge(blob_url:)
  end
end
