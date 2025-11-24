import React from "react";

function AdminAccessControlCard() {
  return (
    <section className="bg-white rounded-3xl border border-neutral-100 shadow-sm px-5 sm:px-7 py-5">
      <h3 className="text-lg font-semibold text-neutral-900 mb-6">
        Admin Access Control
      </h3>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-neutral-900">Invite New Admin</p>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
        >
          Add Admin User
        </button>
      </div>
    </section>
  );
}

export default AdminAccessControlCard;
